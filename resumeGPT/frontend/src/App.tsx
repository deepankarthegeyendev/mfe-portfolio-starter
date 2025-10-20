import { useEffect } from 'react';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import './components/forms/forms.css';

// Component to handle theme changes
const ThemeHandler = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.body.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  return null;
};
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet
} from 'react-router-dom';
import ResumeBuilder from './components/ResumeBuilder';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';

function App() {
  // Add ThemeHandler to manage theme changes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Box minH="100vh" bg="gray.50">
            <Header />
            {/* Outlet renders the child routes */}
            <Outlet />
          </Box>
        }
      >
        <Route path="/" element={<ResumeBuilder />} />
        <Route path="/preview" element={<ResumePreview />} />
      </Route>
    )
  );

  return (
    <ChakraProvider>
      <ThemeHandler />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;