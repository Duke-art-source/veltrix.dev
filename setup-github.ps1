# GitHub Push Setup Script for Veltrix Portfolio
# Run this in PowerShell: .\setup-github.ps1

Write-Host ""
Write-Host "========================================"
Write-Host "  VELTRIX PORTFOLIO - GITHUB SETUP" -ForegroundColor Cyan
Write-Host "========================================"
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ ERROR: Git is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Visit: https://git-scm.com/download/win"
    Write-Host "2. Download and install the latest version"
    Write-Host "3. Restart PowerShell"
    Write-Host "4. Run this script again"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Step 1: Initialize repository
Write-Host "[STEP 1] Initializing Git repository..." -ForegroundColor Yellow
git init
Write-Host "✓ Repository initialized!" -ForegroundColor Green
Write-Host ""

# Step 2: Configure user (optional)
Write-Host "[STEP 2] Configure your Git user info (optional)" -ForegroundColor Yellow
$gitUser = Read-Host "Enter your GitHub username (or press Enter to skip)"
if ($gitUser) {
    git config user.name $gitUser
    Write-Host "✓ Username set: $gitUser" -ForegroundColor Green
} else {
    Write-Host "⊘ Skipping username configuration" -ForegroundColor Gray
}

$gitEmail = Read-Host "Enter your GitHub email (or press Enter to skip)"
if ($gitEmail) {
    git config user.email $gitEmail
    Write-Host "✓ Email set: $gitEmail" -ForegroundColor Green
} else {
    Write-Host "⊘ Skipping email configuration" -ForegroundColor Gray
}

Write-Host ""

# Step 3: Add files
Write-Host "[STEP 3] Adding all files to git..." -ForegroundColor Yellow
git add .
Write-Host "✓ Files added!" -ForegroundColor Green
Write-Host ""

# Step 4: Create commit
Write-Host "[STEP 4] Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Veltrix portfolio project"
Write-Host "✓ Commit created!" -ForegroundColor Green
Write-Host ""

# Step 5: Setup main branch
Write-Host "[STEP 5] Setting up main branch..." -ForegroundColor Yellow
git branch -M main
Write-Host "✓ Branch 'main' created!" -ForegroundColor Green
Write-Host ""

Write-Host ""
Write-Host "========================================"
Write-Host "  SETUP COMPLETE - NEXT STEPS:" -ForegroundColor Cyan
Write-Host "========================================"
Write-Host ""
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Create a new repository:" -ForegroundColor White
Write-Host "   • Name: my-portfolio" -ForegroundColor Gray
Write-Host "   • Description: Veltrix - Custom Web Development Portfolio" -ForegroundColor Gray
Write-Host "   • Public or Private (your choice)" -ForegroundColor Gray
Write-Host ""
Write-Host "3. After creating, copy the repository URL" -ForegroundColor White
Write-Host ""
Write-Host "4. Run these commands in PowerShell:" -ForegroundColor White
Write-Host ""
Write-Host '   git remote add origin [YOUR_REPO_URL]' -ForegroundColor Cyan
Write-Host '   git push -u origin main' -ForegroundColor Cyan
Write-Host ""
Write-Host "5. Enter your credentials:" -ForegroundColor White
Write-Host "   • Username: Your GitHub username" -ForegroundColor Gray
Write-Host "   • Password: Use a Personal Access Token (recommended)" -ForegroundColor Gray
Write-Host ""
Write-Host "HOW TO CREATE PERSONAL ACCESS TOKEN:" -ForegroundColor Yellow
Write-Host "1. Go to: https://github.com/settings/tokens" -ForegroundColor White
Write-Host "2. Click: Tokens (classic)" -ForegroundColor White
Write-Host "3. Click: Generate new token (classic)" -ForegroundColor White
Write-Host "4. Check: repo (Full control of private repositories)" -ForegroundColor White
Write-Host "5. Scroll down and click: Generate token" -ForegroundColor White
Write-Host "6. COPY the token (you won't see it again!)" -ForegroundColor Red
Write-Host "7. Paste it as your 'password' when git prompts" -ForegroundColor White
Write-Host ""
Write-Host "Your project will then be live on GitHub!" -ForegroundColor Green
Write-Host ""

Read-Host "Press Enter to exit"
