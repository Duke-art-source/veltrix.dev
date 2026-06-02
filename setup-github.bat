@echo off
REM GitHub Push Setup Script for Veltrix Portfolio
REM This script will initialize git and prepare for GitHub push

echo.
echo ========================================
echo   VELTRIX PORTFOLIO - GITHUB SETUP
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo.
    echo Please install Git first:
    echo 1. Visit: https://git-scm.com/download/win
    echo 2. Download and install the latest version
    echo 3. Restart your terminal
    echo 4. Run this script again
    echo.
    pause
    exit /b 1
)

echo Git version:
git --version
echo.

REM Initialize git repository
echo [STEP 1] Initializing Git repository...
git init
echo Repository initialized!
echo.

REM Configure git user (optional but recommended)
echo [STEP 2] Configure your Git user info (optional)
echo Enter your GitHub username (or press Enter to skip):
set /p GIT_USER=
if not "%GIT_USER%"=="" (
    git config user.name "%GIT_USER%"
    echo Username set: %GIT_USER%
) else (
    echo Skipping username configuration
)
echo.

echo Enter your GitHub email (or press Enter to skip):
set /p GIT_EMAIL=
if not "%GIT_EMAIL%"=="" (
    git config user.email "%GIT_EMAIL%"
    echo Email set: %GIT_EMAIL%
) else (
    echo Skipping email configuration
)
echo.

REM Add all files
echo [STEP 3] Adding all files to git...
git add .
echo Files added!
echo.

REM Create first commit
echo [STEP 4] Creating initial commit...
git commit -m "Initial commit: Veltrix portfolio project"
echo Commit created!
echo.

REM Create main branch
echo [STEP 5] Setting up main branch...
git branch -M main
echo Branch 'main' created!
echo.

echo.
echo ========================================
echo  SETUP COMPLETE - NEXT STEPS:
echo ========================================
echo.
echo 1. Go to https://github.com/new
echo 2. Create a new repository (name: "my-portfolio")
echo 3. Copy the repository URL (HTTPS)
echo 4. Run this command in PowerShell:
echo.
echo    git remote add origin [YOUR_REPO_URL]
echo    git push -u origin main
echo.
echo 5. When prompted, use your GitHub username and password
echo    (Or use a Personal Access Token for better security)
echo.
echo PERSONAL ACCESS TOKEN (Recommended):
echo 1. Go to: https://github.com/settings/tokens
echo 2. Click "Generate new token (classic)"
echo 3. Select "repo" scope
echo 4. Generate and copy the token
echo 5. Use token as your password when git prompts
echo.
pause
