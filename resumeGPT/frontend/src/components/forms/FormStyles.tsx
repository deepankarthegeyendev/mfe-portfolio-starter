import { useColorModeValue } from '@chakra-ui/react';

export const useFormStyles = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('blue.500', 'blue.300');
  const labelColor = useColorModeValue('gray.700', 'gray.200');
  const inputBg = useColorModeValue('white', 'gray.700');
  const placeholderColor = useColorModeValue('gray.400', 'gray.500');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return {
    container: {
      bg,
      p: 6,
      borderRadius: 'lg',
      boxShadow: 'sm',
    },
    section: {
      bg: inputBg,
      p: 4,
      borderRadius: 'md',
      borderWidth: '1px',
      borderColor: borderColor,
    },
    heading: {
      color: headingColor,
      size: 'md',
      mb: 4,
    },
    label: {
      color: labelColor,
      fontSize: 'sm',
      fontWeight: 'medium',
      mb: 2,
    },
    input: {
      bg: inputBg,
      color: textColor,
      borderColor: borderColor,
      _placeholder: { color: placeholderColor },
    },
    text: {
      color: textColor,
    }
  };
};