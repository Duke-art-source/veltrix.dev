require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const connectDB = require('./db');
const Inquiry = require('./models/Inquiry');

const app = express();
const dataDir = path.join(__dirname, 'data');
const inquiriesFile = path.join(dataDir, 'inquiries.json');
const useFileDb = process.env.USE_FILE_DB === 'true';

const ensureDataFile = async () => {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(inquiriesFile);
  } catch {
    await fs.writeFile(inquiriesFile, '[]', 'utf8');
  }
};

const readInquiries = async () => {
  await ensureDataFile();
  const content = await fs.readFile(inquiriesFile, 'utf8');
  return JSON.parse(content || '[]');
};

const writeInquiries = async (inquiries) => {
  await ensureDataFile();
  await fs.writeFile(inquiriesFile, JSON.stringify(inquiries, null, 2), 'utf8');
};

const startServer = async () => {
  let dbConnected = false;

  if (!useFileDb) {
    dbConnected = await connectDB();
    if (!dbConnected) {
      console.log('MongoDB unavailable. Falling back to local file storage.');
    }
  }

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
  });

  // Save contact inquiries
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, project_type, scope_summary } = req.body;

      if (!name || !email || !project_type || !scope_summary) {
        return res.status(400).json({ message: 'Please fill in all required fields.' });
      }

      const inquiryData = {
        name,
        email,
        project_type,
        scope_summary,
        createdAt: new Date().toISOString(),
      };

      if (useFileDb || !dbConnected) {
        const inquiries = await readInquiries();
        inquiries.unshift(inquiryData);
        await writeInquiries(inquiries);
        return res.status(201).json({ message: 'Inquiry saved locally.', inquiryId: inquiries[0].createdAt });
      }

      const inquiry = new Inquiry(inquiryData);
      await inquiry.save();
      return res.status(201).json({ message: 'Inquiry saved successfully.', inquiryId: inquiry._id });
    } catch (error) {
      console.error('Failed to save inquiry:', error);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });

  // Get all contact inquiries
  app.get('/api/inquiries', async (req, res) => {
    try {
      if (useFileDb || !dbConnected) {
        const inquiries = await readInquiries();
        return res.json({ count: inquiries.length, inquiries });
      }

      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return res.json({ count: inquiries.length, inquiries });
    } catch (error) {
      console.error('Failed to fetch inquiries:', error);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
};

startServer();