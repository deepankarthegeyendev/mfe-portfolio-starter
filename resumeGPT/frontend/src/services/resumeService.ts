// Local type definitions (must match backend contract!)
export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
  achievements: string[];
}
export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
  jobDescription: string;
}

export interface ResumeData {
  jobDescription: string;
  resumeText?: string;
  [key: string]: any;
}

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

/**
 * Call OpenAI's GPT API directly for development/testing (no backend).
 * Requires: .env with VITE_OPENAI_API_KEY
 */
export const generateResumeWithOpenAI = async (resumeData: ResumeData): Promise<ResumeData> => {
  if (!OPENAI_API_KEY) throw new Error('VITE_OPENAI_API_KEY is missing in .env!');
  // Compose a smart prompt for GPT
  const prompt = `You are a world-class AI resume optimization assistant. 
User resume (JSON):\n${JSON.stringify(resumeData)}\nParse, suggest improvements, extract missing skills, optimize roles and summarize. Respond with only the improved user JSON.`;
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a resume optimization assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 700,
      temperature: 0.7
    })
  });
  const data = await resp.json();
  // Try to parse OpenAI output as ResumeData
  let returned: ResumeData = resumeData;
  try {
    returned = JSON.parse(data.choices[0].message.content);
  } catch {
    // fallback: return original with AI output stuck in jobDescription
    returned = { ...resumeData, jobDescription: data.choices[0].message.content };
  }
  return returned;
}

export const analyzeJobDescription = async (jobDescription: string) => {
  try {
    const response = await api.post('/resume/analyze-job', { jobDescription });
    return response.data;
  } catch (error) {
    console.error('Error analyzing job description:', error);
    throw new Error('Failed to analyze job description');
  }
};

export const downloadResumePDF = async (resumeData: ResumeData): Promise<Blob> => {
  try {
    const response = await api.post('/resume/download-pdf', resumeData, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw new Error('Failed to download PDF');
  }
};

export const saveResume = async (resumeData: ResumeData, resumeId?: string) => {
  try {
    const url = resumeId ? `/resume/${resumeId}` : '/resume';
    const method = resumeId ? 'put' : 'post';
    const response = await api[method](url, resumeData);
    return response.data;
  } catch (error) {
    console.error('Error saving resume:', error);
    throw new Error('Failed to save resume');
  }
};

export const loadResume = async (resumeId: string): Promise<ResumeData> => {
  try {
    const response = await api.get(`/resume/${resumeId}`);
    return response.data;
  } catch (error) {
    console.error('Error loading resume:', error);
    throw new Error('Failed to load resume');
  }
};

export const listResumes = async () => {
  try {
    const response = await api.get('/resume');
    return response.data;
  } catch (error) {
    console.error('Error listing resumes:', error);
    throw new Error('Failed to list resumes');
  }
};

/**
 * Calls backend or OpenAI API to generate an improved resume based on job description.
 */
export const generateResumeWithAI = async (resumeData: ResumeData) => {
  try {
    // Example: Replace with your actual backend endpoint
    const response = await axios.post('/api/generate-resume', {
      jobDescription: resumeData.jobDescription,
      resumeText: resumeData.resumeText || '',
    });

    // The API should return a JSON with optimized resume content
    return response.data;
  } catch (error: any) {
    console.error('Error generating resume with AI:', error);
    throw new Error('AI generation failed');
  }
};

