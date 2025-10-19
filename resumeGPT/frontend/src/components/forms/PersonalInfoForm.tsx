import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Icon,
  Input,
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
// Define PersonalInfo interface locally
interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={4} color="blue.500">
        <Icon as={FaUser} mr={2} />
        Personal Information
      </Heading>
      
      <VStack spacing={4}>
        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            Full Name *
          </Text>
          <Input
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            Email *
          </Text>
          <Input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your.email@example.com"
            required
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            Phone *
          </Text>
          <Input
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            required
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            Location *
          </Text>
          <Input
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="City, State/Country"
            required
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            LinkedIn Profile
          </Text>
          <Input
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            GitHub Profile
          </Text>
          <Input
            value={data.github}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="https://github.com/yourusername"
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            Personal Website
          </Text>
          <Input
            value={data.website}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default PersonalInfoForm;
