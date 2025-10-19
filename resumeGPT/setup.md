# ResumeGPT Setup Guide

## Quick Start

### 1. Prerequisites
- Node.js 18+ and npm
- .NET 9.0 SDK
- OpenAI API key

### 2. Backend Setup

```bash
cd resumeGPT/backend/ResumeGPT.API
```

Update `appsettings.json` with your OpenAI API key:
```json
{
  "OpenAI": {
    "ApiKey": "your-openai-api-key-here"
  }
}
```

Run the backend:
```bash
dotnet run
```

### 3. Frontend Setup

```bash
cd resumeGPT/frontend
```

Install dependencies:
```bash
npm install
```

Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

Run the frontend:
```bash
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:5173
- Backend API: https://localhost:5001
- Swagger UI: https://localhost:5001/swagger

### 5. Integration with Main Portfolio

The ResumeGPT application is integrated into the main portfolio at `/resumegpt` route.

## Features

- ✅ AI-powered resume optimization
- ✅ Job description analysis
- ✅ Modern React UI with Chakra UI
- ✅ .NET Core Web API backend
- ✅ OpenAI GPT-4 integration
- ✅ PDF export functionality
- ✅ Responsive design

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the backend CORS policy allows the frontend URL
2. **OpenAI API Errors**: Verify your API key is correct and has sufficient credits
3. **Port Conflicts**: Make sure ports 5173 and 5001 are available

### Development Tips

- Use the browser developer tools to debug API calls
- Check the backend console for detailed error messages
- The Swagger UI is helpful for testing API endpoints directly

