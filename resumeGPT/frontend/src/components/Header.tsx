import React from 'react';
import { Box, Flex, Heading, Icon, Text, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FaRobot, FaSun, FaMoon, FaFileAlt, FaEye, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  // location is not used; keep header simple
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
      position="fixed"
      className="fixed-header"
      top={0}
      left={0}
      right={0}
      width="100vw"
      marginLeft="calc(50% - 50vw)"
      marginRight="calc(50% - 50vw)"
      zIndex={1100}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" w="100%">
        <Flex align="center" gap={3}>
          <Box as={Link} to="/" display="flex" alignItems="center" style={{ textDecoration: 'none' }}>
            <Icon as={FaRobot} w={8} h={8} color={logoColor} className="header-icon" />
          </Box>
          <Box>
            <Flex align="center" gap={2}>
              <Box
                as={Link}
                to="/"
                className="header-name"
                style={{ color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <Heading fontSize="2xl" color="white" fontWeight="semibold" style={{ margin: 0 }}>
                  ResumeGPT
                </Heading>
              </Box>
              <Tooltip label="Visit Portfolio" placement="bottom" hasArrow>
                <Box 
                  as="a" 
                  href="https://www.deepankarthegeyen.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                  display="flex"
                  alignItems="center"
                  _hover={{ 
                    color: 'blue.300'
                  }}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  <Icon as={FaGlobe} w={5} h={5} color={logoColor} />
                </Box>
              </Tooltip>
            </Flex>
            <Text className="header-sub" fontSize="md" color={useColorModeValue('gray.300', 'gray.400')} mt={0.5} fontWeight={500}>
              AI-Powered Resume Assistant
            </Text>
          </Box>
        </Flex>

        <Flex className="header-icons-row" align="center" gap={4}>
          <Box as={Link} to="/" style={{ color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Icon as={FaFileAlt} mr={2} /> <span className="header-btn-text">Build Resume</span>
          </Box>

          <Box as={Link} to="/preview" style={{ color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Icon as={FaEye} mr={2} /> <span className="header-btn-text">Preview</span>
          </Box>

          <Box onClick={toggleColorMode} style={{ color: 'white', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Icon as={colorMode === 'light' ? FaMoon : FaSun} mr={2} /> <span className="header-btn-text">Theme</span>
          </Box>
        </Flex>
      </Flex>

      {/* Responsive CSS: Hide name and text labels on mobile, keep icons in a row */}
      <style>{`
        .portfolio-link {
          opacity: 0.85;
        }
        .portfolio-link:hover {
          opacity: 1;
        }
        @media (max-width: 600px) {
          .header-name, .header-btn-text, .header-sub {
            display: none !important;
          }
          .portfolio-link {
            padding: 4px 8px !important;
          }
          .portfolio-link .header-btn-text {
            display: inline !important;
            font-size: 12px !important;
          }
          .header-icons-row {
            flex-direction: row !important;
            justify-content: flex-end !important;
            align-items: center !important;
            gap: 0.5rem !important;
            width: auto !important;
          }
        }
      `}</style>
    </Box>
  );
};

export default Header;
