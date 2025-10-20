import React, { useState } from 'react';
import {
  Box,
  Input,
  VStack,
  HStack,
  Button,
  Heading,
  Icon,
  Badge,
  Wrap,
  Text,
} from '@chakra-ui/react';
import { FaCogs, FaPlus, FaTimes } from 'react-icons/fa';
// Define SkillsForm types locally
interface SkillsFormProps {
  data: string[];
  onChange: (skills: string[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState('');
  const [suggestedSkills] = useState([
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C#',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Agile', 'Scrum', 'Leadership',
    'Project Management', 'Data Analysis', 'Machine Learning', 'UI/UX Design'
  ]);

  const addSkill = (skill: string) => {
    if (skill.trim() && !data.includes(skill.trim())) {
      onChange([...data, skill.trim()]);
      setNewSkill('');
    }
  };
  const removeSkill = (skillToRemove: string) => {
    onChange(data.filter(skill => skill !== skillToRemove));
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(newSkill);
    }
  };

  return (
    <Box className="form-section" p={6} borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={4} className="form-heading">
        <Icon as={FaCogs} mr={2} />
        Skills
      </Heading>
      <VStack gap={4} align="stretch">
        <Box width="100%" className="form-card" p={4} borderRadius="md">
          <Text fontSize="sm" fontWeight="medium" mb={2} className="form-label">Add Skills</Text>
          <HStack gap={2}>
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a skill and press Enter"
              className="form-input"
            />
            <Button
              size="sm"
              colorScheme="blue"
              variant="ghost"
              onClick={() => addSkill(newSkill)}
              disabled={!newSkill.trim()}
            >
              <FaPlus />
            </Button>
          </HStack>
        </Box>
        {data.length > 0 && (
          <Box>
            <Text fontSize="sm" fontWeight="medium" mb={2} className="form-label">
              Your Skills ({data.length})
            </Text>
            <Wrap gap={2}>
              {data.map((skill, index) => (
                <Badge
                  key={index}
                  className="skill-badge"
                  px={3}
                  py={1}
                  borderRadius={12}
                  fontSize="md"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  variant="solid"
                >
                  {skill}
                  <Button size="xs" ml={2} colorScheme="red" variant="ghost" onClick={() => removeSkill(skill)} aria-label={`Remove ${skill}`}>
                    <FaTimes />
                  </Button>
                </Badge>
              ))}
            </Wrap>
          </Box>
        )}
        <Box className="form-card" p={4} borderRadius="md">
          <Text fontSize="sm" fontWeight="medium" mb={2} className="form-label">Suggested Skills</Text>
          <Text fontSize="sm" className="form-text" mb={2}>
            Click on a skill to add it to your resume
          </Text>
          <Wrap gap={2}>
            {suggestedSkills
              .filter(skill => !data.includes(skill))
              .map((skill, index) => (
                <Badge
                  key={index}
                  cursor="pointer"
                  colorScheme="gray"
                  px={3}
                  py={1}
                  borderRadius={12}
                  fontSize="sm"
                  onClick={() => addSkill(skill)}
                  _hover={{ bg: 'blue.50', borderColor: 'blue.300' }}
                >
                  {skill}
                </Badge>
              ))}
          </Wrap>
        </Box>
        {data.length === 0 && (
          <Box textAlign="center" py={8} color="white">
            <Icon as={FaCogs} w={12} h={12} mb={4} />
            <Text>No skills added yet.</Text>
            <Text fontSize="sm">Add skills manually or select from suggestions above.</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SkillsForm;
