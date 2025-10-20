import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface FormSectionProps {
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ children }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bg}
      p={6}
      borderRadius="lg"
      boxShadow="sm"
      borderWidth="1px"
      borderColor={borderColor}
    >
      {children}
    </Box>
  );
};

export const FormItem: React.FC<FormSectionProps> = ({ children }) => {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bg}
      p={4}
      borderRadius="md"
      borderWidth="1px"
      borderColor={borderColor}
      width="100%"
    >
      {children}
    </Box>
  );
};

export const useFormColors = () => {
  return {
    heading: useColorModeValue('blue.500', 'blue.300'),
    label: useColorModeValue('gray.700', 'gray.200'),
    text: useColorModeValue('gray.800', 'white'),
    placeholder: useColorModeValue('gray.400', 'gray.500'),
    inputBg: useColorModeValue('white', 'gray.700'),
    border: useColorModeValue('gray.200', 'gray.600'),
  };
};