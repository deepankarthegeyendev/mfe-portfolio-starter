import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeBuilder from './components/ResumeBuilder';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg="gray.50">
          <Header />
          <Routes>
            <Route path="/" element={<ResumeBuilder />} />
            <Route path="/preview" element={<ResumePreview />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;