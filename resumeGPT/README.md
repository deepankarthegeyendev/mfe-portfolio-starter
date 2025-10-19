# ResumeGPT

A lightweight AI-powered tool that helps users generate and improve resumes based on job descriptions.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite + Chakra UI
- **Backend**: .NET Core 9.0 Web API
- **AI Integration**: OpenAI GPT-4 API
- **Styling**: Chakra UI + Custom CSS

## Features

- 🤖 **AI-Powered Resume Generation**: Generate optimized resumes based on job descriptions
- 📝 **Comprehensive Resume Builder**: Personal info, experience, education, and skills forms
- 🔍 **Job Description Analysis**: Analyze job postings for insights and recommendations
- 👁️ **Live Preview**: Real-time resume preview with modern design
- 📄 **PDF Export**: Download your resume as a professional PDF
- 🎨 **Modern UI**: Clean, responsive interface built with Chakra UI

## Project Structure

```
resumeGPT/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── forms/          # Form components
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript type definitions
│   │   └── App.tsx         # Main application component
│   └── package.json
├── backend/                 # .NET Core Web API
│   └── ResumeGPT.API/
│       ├── Controllers/     # API controllers
│       ├── Models/         # Data models
│       ├── Services/       # Business logic services
│       └── Program.cs      # Application entry point
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- .NET 9.0 SDK
- OpenAI API key

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd resumeGPT/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd resumeGPT/backend/ResumeGPT.API
   ```

2. Configure OpenAI API key in `appsettings.json`:
   ```json
   {
     "OpenAI": {
       "ApiKey": "your-openai-api-key-here"
     }
   }
   ```

3. Run the API:
   ```bash
   dotnet run
   ```

The API will be available at `https://localhost:5001` (or `http://localhost:5000`)

### Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## API Endpoints

### Resume Generation
- `POST /api/resume/generate` - Generate optimized resume based on job description
- `POST /api/resume/analyze-job` - Analyze job description for insights
- `POST /api/resume/download-pdf` - Download resume as PDF
- `POST /api/resume` - Save resume data
- `GET /api/resume/{id}` - Get resume by ID
- `GET /api/resume` - List all resumes

## Usage

1. **Enter Job Description**: Paste the job description you're applying for
2. **Fill Resume Information**: Complete your personal info, experience, education, and skills
3. **Generate with AI**: Click "Generate Resume with AI" to get AI-powered optimizations
4. **Preview & Download**: Review your optimized resume and download as PDF

## Key Components

### Frontend Components

- **ResumeBuilder**: Main form component for building resumes
- **ResumePreview**: Live preview of the resume
- **PersonalInfoForm**: Personal information input form
- **ExperienceForm**: Work experience management
- **EducationForm**: Education history management
- **SkillsForm**: Skills input with suggestions
- **JobDescriptionInput**: Job description analysis input

### Backend Services

- **OpenAIService**: Handles AI integration for resume optimization
- **ResumeController**: API endpoints for resume operations

## AI Features

- **Resume Optimization**: AI analyzes job requirements and optimizes resume content
- **Skill Gap Analysis**: Identifies missing skills and suggests improvements
- **Achievement Enhancement**: Suggests quantifiable achievements
- **Content Prioritization**: Reorders content based on job relevance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the MFE Portfolio Starter and follows the same license terms.

## Support

For issues and questions, please create an issue in the repository or contact the development team.

