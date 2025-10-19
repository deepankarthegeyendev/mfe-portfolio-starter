#!/bin/bash

echo "Starting ResumeGPT Application..."
echo

echo "Starting Backend API..."
cd backend/ResumeGPT.API
dotnet run &
BACKEND_PID=$!

sleep 3

echo "Starting Frontend..."
cd ../../frontend
npm run dev &
FRONTEND_PID=$!

echo
echo "ResumeGPT is starting up..."
echo "Backend API: https://localhost:5001"
echo "Frontend: http://localhost:5173"
echo
echo "Press Ctrl+C to stop all services..."

# Function to cleanup background processes
cleanup() {
    echo "Stopping services..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait

