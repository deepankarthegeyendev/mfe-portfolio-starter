import React from 'react';
import {
  Box,
  Container,
  VStack,
  Text,
  Heading,
  HStack,
  Icon,
  Badge,
  Button,
} from '@chakra-ui/react';
import { FaDownload, FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
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

interface ResumePreviewProps {
  resumeData?: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  // Simple toast replacement
  const showToast = (title: string, description: string) => {
    alert(`${title}: ${description}`);
  };

  // Mock data for preview if no data is provided
  const mockData: ResumeData = {
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      website: 'https://johndoe.dev',
    },
    experience: [
      {
        id: '1',
        company: 'Tech Corp',
        position: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2022-01',
        endDate: '',
        current: true,
        description: 'Led development of scalable web applications using React and Node.js.',
        achievements: [
          'Improved application performance by 40% through code optimization',
          'Mentored 3 junior developers and conducted code reviews',
          'Implemented CI/CD pipeline reducing deployment time by 60%',
        ],
      },
    ],
    education: [
      {
        id: '1',
        institution: 'University of California',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        location: 'Berkeley, CA',
        startDate: '2018-09',
        endDate: '2022-05',
        current: false,
        gpa: '3.8',
        achievements: [
          'Magna Cum Laude',
          'Dean\'s List for 4 consecutive semesters',
        ],
      },
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
    jobDescription: '',
  };

  const data = resumeData || mockData;

  const handleDownload = () => {
    showToast('Download Started', 'Your resume PDF is being generated.');
  };

  return (
    <Container maxW="800px" py={8}>
      <VStack gap={6} align="stretch">
        {/* Header Actions */}
        <HStack justify="space-between">
          <Heading size="lg" color="blue.500">
            Resume Preview
          </Heading>
          <HStack gap={2}>
            <Button
              colorScheme="blue"
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
            >
              <FaEdit style={{ marginRight: '8px' }} />
              Edit Resume
            </Button>
            <Button
              colorScheme="green"
              size="sm"
              onClick={handleDownload}
            >
              <FaDownload style={{ marginRight: '8px' }} />
              Download PDF
            </Button>
          </HStack>
        </HStack>

        {/* Resume Content */}
        <Box bg="white" p={8} borderRadius="lg" boxShadow="lg" border="1px" borderColor="gray.200">
          {/* Header */}
          <VStack gap={4} align="center" mb={8}>
            <Heading size="xl" color="blue.500" textAlign="center">
              {data.personalInfo.fullName}
            </Heading>
            
            <HStack gap={6} wrap="wrap" justify="center">
              <HStack>
                <Icon as={FaEnvelope} color="gray.500" />
                <Text fontSize="sm">{data.personalInfo.email}</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} color="gray.500" />
                <Text fontSize="sm">{data.personalInfo.phone}</Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="gray.500" />
                <Text fontSize="sm">{data.personalInfo.location}</Text>
              </HStack>
            </HStack>

            <HStack gap={4}>
              {data.personalInfo.linkedin && (
                <HStack>
                  <Icon as={FaLinkedin} color="blue.500" />
                  <Text fontSize="sm" color="blue.500">LinkedIn</Text>
                </HStack>
              )}
              {data.personalInfo.github && (
                <HStack>
                  <Icon as={FaGithub} color="gray.700" />
                  <Text fontSize="sm" color="gray.700">GitHub</Text>
                </HStack>
              )}
              {data.personalInfo.website && (
                <HStack>
                  <Icon as={FaGlobe} color="blue.500" />
                  <Text fontSize="sm" color="blue.500">Website</Text>
                </HStack>
              )}
            </HStack>
          </VStack>

          <Box height="1px" bg="gray.200" mb={6} />

          {/* Experience Section */}
          {data.experience.length > 0 && (
            <Box mb={6}>
              <Heading size="md" color="blue.500" mb={4}>
                Professional Experience
              </Heading>
              <VStack gap={4} align="stretch">
                {data.experience.map((exp, index) => (
                  <Box key={exp.id}>
                    <HStack justify="space-between" mb={2}>
                      <VStack align="start" gap={0}>
                        <Text fontWeight="bold" fontSize="lg">
                          {exp.position}
                        </Text>
                        <Text color="blue.500" fontSize="md">
                          {exp.company}
                        </Text>
                        <Text color="gray.600" fontSize="sm">
                          {exp.location}
                        </Text>
                      </VStack>
                      <Text color="gray.600" fontSize="sm">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </Text>
                    </HStack>
                    
                    {exp.description && (
                      <Text mb={2} fontSize="sm" color="gray.700">
                        {exp.description}
                      </Text>
                    )}
                    
                    {exp.achievements.length > 0 && (
                      <Box>
                        <Text fontWeight="semibold" fontSize="sm" mb={1}>
                          Key Achievements:
                        </Text>
                        <VStack align="stretch" gap={1}>
                          {exp.achievements.map((achievement, achIndex) => (
                            <Text key={achIndex} fontSize="sm" color="gray.700" pl={4}>
                              • {achievement}
                            </Text>
                          ))}
                        </VStack>
                      </Box>
                    )}
                    
                    {index < data.experience.length - 1 && (
                      <Box height="1px" bg="gray.200" mt={4} />
                    )}
                  </Box>
                ))}
              </VStack>
            </Box>
          )}

          {/* Education Section */}
          {data.education.length > 0 && (
            <Box mb={6}>
              <Heading size="md" color="blue.500" mb={4}>
                Education
              </Heading>
              <VStack gap={4} align="stretch">
                {data.education.map((edu, index) => (
                  <Box key={edu.id}>
                    <HStack justify="space-between" mb={2}>
                      <VStack align="start" gap={0}>
                        <Text fontWeight="bold" fontSize="lg">
                          {edu.degree} in {edu.field}
                        </Text>
                        <Text color="blue.500" fontSize="md">
                          {edu.institution}
                        </Text>
                        <Text color="gray.600" fontSize="sm">
                          {edu.location}
                        </Text>
                      </VStack>
                      <VStack align="end" gap={0}>
                        <Text color="gray.600" fontSize="sm">
                          {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                        </Text>
                        {edu.gpa && (
                          <Text color="gray.600" fontSize="sm">
                            GPA: {edu.gpa}
                          </Text>
                        )}
                      </VStack>
                    </HStack>
                    
                    {edu.achievements.length > 0 && (
                      <Box>
                        <Text fontWeight="semibold" fontSize="sm" mb={1}>
                          Achievements:
                        </Text>
                        <VStack align="stretch" gap={1}>
                          {edu.achievements.map((achievement, achIndex) => (
                            <Text key={achIndex} fontSize="sm" color="gray.700" pl={4}>
                              • {achievement}
                            </Text>
                          ))}
                        </VStack>
                      </Box>
                    )}
                    
                    {index < data.education.length - 1 && (
                      <Box height="1px" bg="gray.200" mt={4} />
                    )}
                  </Box>
                ))}
              </VStack>
            </Box>
          )}

          {/* Skills Section */}
          {data.skills.length > 0 && (
            <Box>
              <Heading size="md" color="blue.500" mb={4}>
                Skills
              </Heading>
              <HStack gap={2} wrap="wrap">
                {data.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    colorScheme="blue"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {skill}
                  </Badge>
                ))}
              </HStack>
            </Box>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default ResumePreview;
