import { Container, Box, Badge } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import { WorkTitle } from "../../components/works";

const Flare = () => {
  return (
    <Container>
      <WorkTitle>My own app</WorkTitle>

      <Box marginBottom={3}>
        <Badge colorScheme="blue" mr={4}>
          React Native
        </Badge>

        <Badge colorScheme="yellow" mr={4}>
          Expo
        </Badge>

        <Badge colorScheme="blue" mr={4}>Next.js</Badge>

        <Badge colorScheme="blue" mr={4}>Golang</Badge>

        <Badge colorScheme="red" mr={4}>Supabase</Badge>

        <Badge colorScheme="orange" mr={4}>Sentry</Badge>

        <Badge colorScheme="orange" mr={4}>Posthog</Badge>

        <Badge colorScheme="green" mr={4}>Stripe</Badge>
      </Box>

      <Paragraph>
        I am creating my own mobile application with React Native and Expo.
        I won&apos;t go into details about the app, but I can tell you something about the stack.

        The app is built with React Native and Expo.
        Backend is built with Golang, Supabase and Postgres.
        I use Sentry for error tracking and Posthog for analytics. I use Stripe for payments.
      </Paragraph>
    </Container>
  );
};

export default Flare;
