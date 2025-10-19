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

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateResumeWithAI = async (resumeData: ResumeData): Promise<ResumeData> => {
  try {
    const response = await api.post('/resume/generate', resumeData);
    return response.data;
  } catch (error) {
    console.error('Error generating resume:', error);
    throw new Error('Failed to generate resume with AI');
  }
};

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

