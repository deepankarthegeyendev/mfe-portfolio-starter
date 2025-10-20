import React from 'react';
import {
  Box,
  Input,
  Textarea,
  VStack,
  HStack,
  Button,
  Heading,
  Icon,
  Checkbox,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBriefcase, FaPlus, FaTrash } from 'react-icons/fa';

// Styles for form elements
const formStyles = {
  section: (bg: string) => ({
    bg,
    p: 6,
    borderRadius: 'lg',
    boxShadow: 'sm'
  }),
  input: (inputBg: string, placeholderColor: string) => ({
    bg: inputBg,
    _placeholder: { color: placeholderColor },
    borderColor: 'inherit'
  }),
  heading: (color: string) => ({
    size: 'md',
    mb: 4,
    color
  }),
  label: (color: string) => ({
    fontSize: 'sm',
    fontWeight: 'medium',
    mb: 2,
    color
  })
};

// Define Experience interface locally
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

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, onChange }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('blue.500', 'blue.300');
  const labelColor = useColorModeValue('gray.700', 'gray.200');
  const inputBg = useColorModeValue('white', 'gray.700');
  const placeholderColor = useColorModeValue('gray.400', 'gray.500');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [],
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    onChange(
      data.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id));
  };

  const addAchievement = (id: string) => {
    updateExperience(id, 'achievements', [...data.find(exp => exp.id === id)?.achievements || [], '']);
  };

  const updateAchievement = (id: string, index: number, value: string) => {
    const exp = data.find(e => e.id === id);
    if (exp) {
      const newAchievements = [...exp.achievements];
      newAchievements[index] = value;
      updateExperience(id, 'achievements', newAchievements);
    }
  };

  const removeAchievement = (id: string, index: number) => {
    const exp = data.find(e => e.id === id);
    if (exp) {
      const newAchievements = exp.achievements.filter((_, i) => i !== index);
      updateExperience(id, 'achievements', newAchievements);
    }
  };

  return (
    <Box {...formStyles.section(bg)}>
      <HStack justify="space-between" mb={4}>
        <Heading {...formStyles.heading(headingColor)}>
          <Icon as={FaBriefcase} mr={2} />
          Work Experience
        </Heading>
        <Button
          leftIcon={<FaPlus />}
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={addExperience}
        >
          Add Experience
        </Button>
      </HStack>

      <VStack spacing={6} align="stretch">
        {data.map((exp, index) => (
          <Box key={exp.id} p={4} border="1px" borderColor={borderColor} borderRadius="md" bg={inputBg}>
            <HStack justify="space-between" mb={4}>
              <Text fontWeight="semibold">Experience #{index + 1}</Text>
              <Button
                size="sm"
                colorScheme="red"
                variant="ghost"
                leftIcon={<FaTrash />}
                onClick={() => removeExperience(exp.id)}
              >
                Remove
              </Button>
            </HStack>

            <VStack spacing={4}>
              <HStack spacing={4} width="100%">
                <Box flex={1}>
                  <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                    Company *
                  </Text>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    placeholder="Company Name"
                    required
                  />
                </Box>
                <Box flex={1}>
                  <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                    Position *
                  </Text>
                  <Input
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    placeholder="Job Title"
                    required
                  />
                </Box>
              </HStack>

              <HStack spacing={4} width="100%">
                <Box flex={1}>
                  <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                    Location
                  </Text>
                  <Input
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                    placeholder="City, State"
                  />
                </Box>
                <Box flex={1}>
                  <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                    Start Date *
                  </Text>
                  <Input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    required
                  />
                </Box>
                <Box flex={1}>
                  <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                    End Date
                  </Text>
                  <Input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    disabled={exp.current}
                  />
                </Box>
              </HStack>

              <Box>
                <Checkbox
                  isChecked={exp.current}
                  onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                >
                  I currently work here
                </Checkbox>
              </Box>

              <Box width="100%">
                <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                  Job Description
                </Text>
                <Textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  placeholder="Describe your role and responsibilities..."
                  rows={3}
                />
              </Box>

              <Box width="100%">
                <HStack justify="space-between" mb={2}>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    Key Achievements
                  </Text>
                  <Button
                    size="sm"
                    leftIcon={<FaPlus />}
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => addAchievement(exp.id)}
                  >
                    Add Achievement
                  </Button>
                </HStack>
                <VStack spacing={2} align="stretch">
                  {exp.achievements.map((achievement, achIndex) => (
                    <HStack key={achIndex}>
                      <Input
                        value={achievement}
                        onChange={(e) => updateAchievement(exp.id, achIndex, e.target.value)}
                        placeholder="Enter a key achievement..."
                      />
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => removeAchievement(exp.id, achIndex)}
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
            <Icon as={FaBriefcase} w={12} h={12} mb={4} />
            <Text>No work experience added yet.</Text>
            <Text fontSize="sm">Click "Add Experience" to get started.</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ExperienceForm;
