import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaRobot, FaFileAlt, FaEye } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      px={6}
      py={4}
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex align="center" gap={3}>
          <Icon as={FaRobot} w={8} h={8} color="blue.500" />
          <Box>
            <Heading size="lg" color="blue.500">
              ResumeGPT
            </Heading>
            <Text fontSize="sm" color="gray.500">
              AI-Powered Resume Builder
            </Text>
          </Box>
        </Flex>
        
        <Flex gap={4}>
          <Button
            as={Link}
            to="/"
            variant={location.pathname === '/' ? 'solid' : 'ghost'}
            colorScheme="blue"
            leftIcon={<FaFileAlt />}
          >
            Build Resume
          </Button>
          <Button
            as={Link}
            to="/preview"
            variant={location.pathname === '/preview' ? 'solid' : 'ghost'}
            colorScheme="blue"
            leftIcon={<FaEye />}
          >
            Preview
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
