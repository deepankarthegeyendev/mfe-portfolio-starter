import React, { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { FaMagic, FaDownload, FaEye } from 'react-icons/fa';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import JobDescriptionInput from './forms/JobDescriptionInput';
// Define ResumeData interface locally
interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

interface Experience {
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

interface Education {
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

interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
  jobDescription: string;
}
import { generateResumeWithAI } from '../services/resumeService';

const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      website: '',
    },
    experience: [],
    education: [],
    skills: [],
    jobDescription: '',
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  // Simple toast replacement
  const showToast = (title: string, description: string) => {
    alert(`${title}: ${description}`);
  };

  const handlePersonalInfoChange = (personalInfo: PersonalInfo) => {
    setResumeData(prev => ({ ...prev, personalInfo }));
  };

  const handleExperienceChange = (experience: Experience[]) => {
    setResumeData(prev => ({ ...prev, experience }));
  };

  const handleEducationChange = (education: Education[]) => {
    setResumeData(prev => ({ ...prev, education }));
  };

  const handleSkillsChange = (skills: string[]) => {
    setResumeData(prev => ({ ...prev, skills }));
  };

  const handleJobDescriptionChange = (jobDescription: string) => {
    setResumeData(prev => ({ ...prev, jobDescription }));
  };

  const handleGenerateResume = async () => {
    if (!resumeData.jobDescription.trim()) {
      showToast('Job Description Required', 'Please enter a job description to generate an optimized resume.');
      return;
    }

    setIsGenerating(true);
    try {
      const generatedResume = await generateResumeWithAI(resumeData);
      setResumeData(generatedResume);
      showToast('Resume Generated!', 'Your resume has been optimized based on the job description.');
    } catch {
      showToast('Generation Failed', 'Failed to generate resume. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAnalyzeJobDescription = async () => {
    if (!resumeData.jobDescription.trim()) {
      showToast('Job Description Required', 'Please enter a job description to analyze.');
      return;
    }

    setIsAnalyzing(true);
    try {
      // This would call the backend to analyze the job description
      // and provide suggestions for skills and experience
      showToast('Analysis Complete', 'Job description analyzed. Check suggestions below.');
    } catch {
      showToast('Analysis Failed', 'Failed to analyze job description. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Container maxW="1200px" py={8}>
      <VStack gap={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center">
          <Text fontSize="3xl" fontWeight="bold" color="blue.500" mb={2}>
            Build Your Perfect Resume
          </Text>
          <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
            Let AI help you create a resume that stands out to employers. 
            Enter your information and a job description to get started.
          </Text>
        </Box>

        {/* Job Description Section */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
          <JobDescriptionInput
            value={resumeData.jobDescription}
            onChange={handleJobDescriptionChange}
            onAnalyze={handleAnalyzeJobDescription}
            isAnalyzing={isAnalyzing}
          />
        </Box>

        {/* Action Buttons */}
        <HStack justify="center" gap={4}>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleGenerateResume}
            disabled={!resumeData.jobDescription.trim()}
          >
            <FaMagic style={{ marginRight: '8px' }} />
            {isGenerating ? 'Generating...' : 'Generate Resume with AI'}
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            variant="outline"
            onClick={() => window.open('/preview', '_blank')}
          >
            <FaEye style={{ marginRight: '8px' }} />
            Preview Resume
          </Button>
        </HStack>

        <Box height="1px" bg="gray.200" my={6} />

        {/* Forms Section */}
        <VStack gap={6} align="stretch">
          <PersonalInfoForm
            data={resumeData.personalInfo}
            onChange={handlePersonalInfoChange}
          />
          
          <ExperienceForm
            data={resumeData.experience}
            onChange={handleExperienceChange}
          />
          
          <EducationForm
            data={resumeData.education}
            onChange={handleEducationChange}
          />
          
          <SkillsForm
            data={resumeData.skills}
            onChange={handleSkillsChange}
          />
        </VStack>

        {/* Bottom Actions */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
          <HStack justify="center" gap={4}>
            <Button
              colorScheme="green"
              size="lg"
              onClick={() => {
                // This would trigger PDF download
                showToast('Download Started', 'Your resume PDF is being generated.');
              }}
            >
              <FaDownload style={{ marginRight: '8px' }} />
              Download PDF
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default ResumeBuilder;
