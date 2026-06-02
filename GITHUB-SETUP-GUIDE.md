# GitHub Setup Guide - Veltrix Portfolio

This guide will walk you through pushing your Veltrix portfolio to GitHub in 5 minutes.

## Prerequisites

You need **Git** installed on your computer.

### Install Git (Windows)

1. Visit: https://git-scm.com/download/win
2. Click the download link (should auto-download)
3. Run the installer
4. Click "Next" through all screens (defaults are fine)
5. Click "Install"
6. Click "Finish"
7. **Restart your terminal/PowerShell**

## Step-by-Step Guide

### Option A: Automated Setup (Easiest)

1. **Open PowerShell** in this folder
2. Run: `.\setup-github.ps1`
3. Follow the prompts
4. Then jump to **"Push to GitHub"** section below

**If you get an error about scripts:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\setup-github.ps1
```

### Option B: Manual Setup

Open PowerShell in this folder and run these commands one by one:

```powershell
# 1. Initialize git repository
git init

# 2. Configure your name (optional but recommended)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: Veltrix portfolio project"

# 5. Create main branch
git branch -M main
```

## Push to GitHub

Once you've run the setup steps above:

### 1. Create a Repository on GitHub

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name**: `my-portfolio` (or your choice)
   - **Description**: `Veltrix - Custom Web Development Portfolio`
   - **Public** or **Private** (choose what you prefer)
3. **DO NOT** check "Initialize this repository with:"
4. Click **"Create repository"**

### 2. Connect Your Local Project

After GitHub creates the repository, you'll see instructions. Run these commands:

```powershell
# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git

# Push your code (this is where you enter credentials)
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username

### 3. Authentication

When you run `git push`, you'll be prompted for credentials:

**Option 1: Personal Access Token (Recommended)**

1. Go to: https://github.com/settings/tokens
2. Click: **"Tokens (classic)"** on the left
3. Click: **"Generate new token (classic)"**
4. Configure:
   - **Note**: `My Portfolio`
   - **Expiration**: Choose 90 days or custom
   - **Scopes**: Check ✓ `repo` (Full control of private repositories)
5. Scroll down and click: **"Generate token"**
6. **COPY the token** (shown in green box - you won't see it again!)
7. When git asks for password, paste this token

**Option 2: GitHub Password** (Less secure)

1. Use your GitHub username and password
2. Note: This may not work if 2-factor authentication is enabled

## Verify Upload

After `git push` completes successfully:

1. Refresh your GitHub repository page
2. You should see all your files!
3. Your portfolio is now on GitHub

## Next Steps: Deploy Your Portfolio

### Option 1: GitHub Pages (Free)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
4. Click **Save**
5. Wait 30 seconds, refresh
6. Your site will be live at: `https://YOUR-USERNAME.github.io/my-portfolio`

### Option 2: Netlify (Recommended)

1. Go to: https://app.netlify.com
2. Click: **"Add new site"** → **"Import an existing project"**
3. Choose: **GitHub**
4. Select your `my-portfolio` repository
5. Click: **Deploy**
6. Your site will be live in 30 seconds!

### Option 3: Vercel

1. Go to: https://vercel.com
2. Click: **"Import Project"**
3. Connect your GitHub account
4. Select `my-portfolio` repository
5. Click: **Deploy**
6. Your site will be live at a Vercel URL

## Troubleshooting

### "Git command not found"
- **Solution**: Git isn't installed. Download from https://git-scm.com/download/win and restart

### "Permission denied (publickey)"
- **Solution**: You likely need to use a Personal Access Token instead of password

### "fatal: not a git repository"
- **Solution**: Make sure you're in the correct folder, then run `git init` first

### "Your branch is ahead of 'origin/main' by X commits"
- **Solution**: This means your local changes aren't pushed yet. Run `git push`

### "The file will have its original line endings in your working directory"
- **Solution**: This is normal. Just continue - Git is just noting line ending conversion

## Update Your Portfolio Later

After you've pushed once, to update your portfolio:

```powershell
# Make changes to your files

# Add and commit
git add .
git commit -m "Update portfolio with new project"

# Push to GitHub
git push
```

That's it! Your updates are now live.

## Useful Git Commands

```powershell
# Check status
git status

# View commit history
git log

# View changes you've made
git diff

# Undo last commit (be careful!)
git reset --soft HEAD~1

# Clone your repository elsewhere
git clone https://github.com/YOUR-USERNAME/my-portfolio.git
```

## Need Help?

- GitHub Docs: https://docs.github.com
- Git Docs: https://git-scm.com/doc
- Troubleshoot: https://github.com/contact/support

---

**Happy deploying!** 🚀

Your Veltrix portfolio will be live in minutes!
