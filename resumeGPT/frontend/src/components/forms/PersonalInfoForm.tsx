import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Icon,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
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

  const bg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('blue.500', 'blue.300');
  const labelColor = useColorModeValue('gray.700', 'gray.200');
  const inputBg = useColorModeValue('white', 'gray.700');
  const placeholderColor = useColorModeValue('gray.400', 'gray.500');

  return (
    <Box bg={bg} p={6} borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={4} color={headingColor}>
        <Icon as={FaUser} mr={2} />
        Personal Information
      </Heading>
      
      <VStack spacing={4}>
        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color={labelColor}>
            Full Name *
          </Text>
          <Input
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Enter your full name"
            bg={inputBg}
            _placeholder={{ color: placeholderColor }}
            required
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color={labelColor}>
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
          <Text fontSize="sm" fontWeight="medium" mb={2} color={labelColor}>
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
          <Text fontSize="sm" fontWeight="medium" mb={2} color={labelColor}>
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
          <Text fontSize="sm" fontWeight="medium" mb={2} color={labelColor}>
            LinkedIn Profile
          </Text>
          <Input
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color={labelColor}>
            GitHub Profile
          </Text>
          <Input
            value={data.github}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="https://github.com/yourusername"
          />
        </Box>

        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color={labelColor}>
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
