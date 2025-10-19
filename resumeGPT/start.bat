@echo off
echo Starting ResumeGPT Application...
echo.

echo Starting Backend API...
start "ResumeGPT Backend" cmd /k "cd backend\ResumeGPT.API && dotnet run"

timeout /t 3 /nobreak > nul

echo Starting Frontend...
start "ResumeGPT Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ResumeGPT is starting up...
echo Backend API: https://localhost:5001
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit...
pause > nul

