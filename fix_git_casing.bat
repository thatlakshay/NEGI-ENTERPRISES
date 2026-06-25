@echo off
echo ===================================================
echo   NEGI ENTERPRISES - GIT CASE SENSITIVITY FIXER
echo ===================================================
echo This script will rename the assets folder and logo 
echo in Git's index to fix the 404 issue on Vercel.
echo.

:: Check if git is installed/accessible
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in your system PATH.
    echo Please install Git or run this script from a Git Bash terminal.
    echo.
    pause
    exit /b
)

:: Run git rename commands to bypass case-insensitive filesystems
echo [1/3] Resetting assets folder casing in Git index...
git mv assets assets-temp
git mv assets-temp assets

echo [2/3] Resetting logo.png file casing in Git index...
git mv assets/logo.png assets/logo-temp.png
git mv assets/logo-temp.png assets/logo.png

echo [3/3] Committing and pushing changes...
git add -A
git commit -m "Fix case-sensitivity of assets folder and logo for Vercel"
git push origin main

echo.
echo ===================================================
echo   Done! Your Vercel build should now show the logo.
echo ===================================================
pause
