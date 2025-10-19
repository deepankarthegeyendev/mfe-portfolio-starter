import React from 'react';
import {
  Box,
  Textarea,
  Button,
  VStack,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaFileAlt, FaSearch, FaLightbulb, FaInfoCircle } from 'react-icons/fa';

// Define types locally
interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({
  value,
  onChange,
  onAnalyze,
  isAnalyzing,
}) => {
  return (
    <Box>
      <VStack gap={4} align="stretch">
        <HStack>
          <Icon as={FaFileAlt} color="blue.500" />
          <Text fontSize="lg" fontWeight="semibold" color="blue.500">
            Job Description
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.600">
          Paste the job description below to get AI-powered suggestions for optimizing your resume.
        </Text>
        <Box width="100%">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
            Job Description *
          </Text>
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste the complete job description here..."
            rows={8}
            resize="vertical"
            required
          />
        </Box>
        <HStack gap={2}>
          <Button
            colorScheme="teal"
            onClick={onAnalyze}
            isLoading={isAnalyzing}
            disabled={!value.trim()}
            flex={1}
          >
            <FaSearch style={{ marginRight: 8 }} /> Analyze Job Description
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => {
              alert('Tips: Include specific technologies, requirements, and responsibilities mentioned in the job posting.');
            }}
          >
            <FaLightbulb style={{ marginRight: 8 }} /> Get Tips
          </Button>
        </HStack>
        {value.trim() && (
          <Box bg="blue.50" borderRadius="md" p={3} display="flex" alignItems="center">
            <Icon as={FaInfoCircle} color="blue.400" mr={2} />
            <Text fontSize="sm">
              <strong>Ready for analysis!</strong> Click "Analyze Job Description" to get AI-powered suggestions for optimizing your resume based on this job posting.
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default JobDescriptionInput;
