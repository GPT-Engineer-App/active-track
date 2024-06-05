import { Container, Text, VStack, Heading, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to FitTrack</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate fitness tracking app. Track your workouts, monitor your progress, and stay motivated!</Text>
        <Flex justifyContent="center" width="100%" mt={4}>
          <IconButton aria-label="Running" icon={<FaRunning />} size="lg" mx={2} />
          <IconButton aria-label="Weightlifting" icon={<FaDumbbell />} size="lg" mx={2} />
          <IconButton aria-label="Heartbeat" icon={<FaHeartbeat />} size="lg" mx={2} />
        </Flex>
        <Box mt={8}>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;