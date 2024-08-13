 # React.JS-Day1

// ChakraComponent.js
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

function ChakraComponent() {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
      bg="white"
    >
      <Text fontSize="xl" mb={4}>Welcome to Chakra UI</Text>
      <Text mb={4}>
        Chakra UI is a simple, modular and accessible component library that provides
        all the building blocks you need to build your React applications.
      </Text>
      <Button colorScheme="teal">Get Started</Button>
    </Box>
  );
}

export default ChakraComponent;
