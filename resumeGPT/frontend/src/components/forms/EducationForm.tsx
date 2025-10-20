import React from 'react';
import {
  Box,
  Input,
  VStack,
  HStack,
  Button,
  Heading,
  Icon,
  Checkbox,
  Text,
  FormControl,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGraduationCap, FaPlus, FaTrash } from 'react-icons/fa';
// Define Education interface locally
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

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ data, onChange }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('blue.500', 'blue.300');
  const labelColor = useColorModeValue('gray.700', 'gray.200');
  const inputBg = useColorModeValue('white', 'gray.700');
  const placeholderColor = useColorModeValue('gray.400', 'gray.500');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      achievements: [],
    };
    onChange([...data, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    onChange(
      data.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id));
  };

  const addAchievement = (id: string) => {
    updateEducation(id, 'achievements', [...data.find(edu => edu.id === id)?.achievements || [], '']);
  };

  const updateAchievement = (id: string, index: number, value: string) => {
    const edu = data.find(e => e.id === id);
    if (edu) {
      const newAchievements = [...edu.achievements];
      newAchievements[index] = value;
      updateEducation(id, 'achievements', newAchievements);
    }
  };

  const removeAchievement = (id: string, index: number) => {
    const edu = data.find(e => e.id === id);
    if (edu) {
      const newAchievements = edu.achievements.filter((_, i) => i !== index);
      updateEducation(id, 'achievements', newAchievements);
    }
  };

  return (
    <Box className="form-section" p={6} borderRadius="lg" boxShadow="sm">
      <HStack justify="space-between" mb={4}>
        <Heading size="md" className="form-heading">
          <Icon as={FaGraduationCap} mr={2} />
          Education
        </Heading>
        <Button
          leftIcon={<FaPlus />}
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={addEducation}
        >
          Add Education
        </Button>
      </HStack>

      <VStack spacing={6} align="stretch">
        {data.map((edu, index) => (
          <Box key={edu.id} className="form-card" p={4} borderRadius="md">
            <HStack justify="space-between" mb={4}>
              <Text fontWeight="semibold" className="form-text">Education #{index + 1}</Text>
              <Button
                size="sm"
                colorScheme="red"
                variant="ghost"
                leftIcon={<FaTrash />}
                onClick={() => removeEducation(edu.id)}
              >
                Remove
              </Button>
            </HStack>

            <VStack spacing={4}>
              <HStack spacing={4} width="100%">
                <FormControl flex={1}>
                  <FormLabel className="form-label">Institution *</FormLabel>
                  <Input
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    placeholder="University/School Name"
                    className="form-input"
                    isRequired
                  />
                </FormControl>
                <FormControl flex={1}>
                  <FormLabel className="form-label">Degree *</FormLabel>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder="Bachelor's, Master's, etc."
                    className="form-input"
                    isRequired
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} width="100%">
                <FormControl flex={1}>
                  <FormLabel className="form-label">Field of Study *</FormLabel>
                  <Input
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                    placeholder="Computer Science, Business, etc."
                    className="form-input"
                    isRequired
                  />
                </FormControl>
                <FormControl flex={1}>
                  <FormLabel className="form-label">Location</FormLabel>
                  <Input
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                    placeholder="City, Country"
                    className="form-input"
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} width="100%">
                <FormControl flex={1}>
                  <FormLabel className="form-label">Start Date *</FormLabel>
                  <Input
                    type="month"
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    className="form-input"
                    isRequired
                  />
                </FormControl>
                <FormControl flex={1}>
                  <FormLabel className="form-label">End Date</FormLabel>
                  <Input
                    type="month"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                    className="form-input"
                    isDisabled={edu.current}
                  />
                </FormControl>
                <FormControl flex={1}>
                  <FormLabel>GPA (Optional)</FormLabel>
                  <Input
                    value={edu.gpa || ''}
                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                    placeholder="3.8"
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <Checkbox
                  isChecked={edu.current}
                  onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                >
                  Currently studying
                </Checkbox>
              </FormControl>

              <Box width="100%">
                <HStack justify="space-between" mb={2}>
                  <FormLabel mb={0}>Achievements & Activities</FormLabel>
                  <Button
                    size="sm"
                    leftIcon={<FaPlus />}
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => addAchievement(edu.id)}
                  >
                    Add Achievement
                  </Button>
                </HStack>
                <VStack spacing={2} align="stretch">
                  {edu.achievements.map((achievement, achIndex) => (
                    <HStack key={achIndex}>
                      <Input
                        value={achievement}
                        onChange={(e) => updateAchievement(edu.id, achIndex, e.target.value)}
                        placeholder="Enter an achievement or activity..."
                      />
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => removeAchievement(edu.id, achIndex)}
                      >
                        <FaTrash />
                      </Button>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>
        ))}

        {data.length === 0 && (
          <Box textAlign="center" py={8} color="gray.500">
            <Icon as={FaGraduationCap} w={12} h={12} mb={4} />
            <Text>No education added yet.</Text>
            <Text fontSize="sm">Click "Add Education" to get started.</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default EducationForm;
