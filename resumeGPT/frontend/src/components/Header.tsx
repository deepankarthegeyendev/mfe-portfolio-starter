import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FaRobot, FaSun, FaMoon, FaFileAlt, FaEye } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('gray.900', 'gray.900');
  const headerColor = useColorModeValue('white', 'white');
  const logoColor = useColorModeValue('blue.400', 'blue.200');

  return (
    <Box
      bg={headerBg}
      color={headerColor}
      px={6}
      py={4}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={1100}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex align="center" gap={3}>
          <Icon as={FaRobot} w={8} h={8} color={logoColor} />
          <Box>
            <Heading fontSize="2xl" color="white" fontWeight="semibold">
              ResumeGPT
            </Heading>
            <Text fontSize="md" color={useColorModeValue('gray.300', 'gray.400')} mt={0.5} fontWeight={500}>
              AI-Powered Resume Assistant
            </Text>
          </Box>
        </Flex>
        <Flex align="center" gap={3}>
          <Button
            as={Link}
            to="/"
            size="sm"
            variant="ghost"
            colorScheme={location.pathname === '/' ? 'blue' : 'gray'}
            fontWeight="bold"
            leftIcon={<FaFileAlt />}
            color="white"
            _hover={{
              color: 'yellow.400',
              bg: 'yellow.900',
            }}
          >
            Build Resume
          </Button>
          <Button
            as={Link}
            to="/preview"
            size="sm"
            variant="ghost"
            colorScheme={location.pathname === '/preview' ? 'blue' : 'gray'}
            fontWeight="bold"
            leftIcon={<FaEye />}
            color="white"
            _hover={{
              color: 'yellow.400',
              bg: 'yellow.900',
            }}
          >
            Preview
          </Button>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            colorScheme="white"
            variant="outline"
            fontSize="xl"
            ml={2}
            isRound
            onClick={toggleColorMode}
            _active={{ transform: 'scale(1.2) rotate(20deg)' }}
            _hover={{ bg: colorMode === 'light' ? 'gray.700' : 'gray.600' }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
