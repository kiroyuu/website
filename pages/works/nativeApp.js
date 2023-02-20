import { Container, Heading, Box, Badge } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import { WorkTitle } from "../../components/works";

const NativeApp = () => {
  return (
    <Container>
      <WorkTitle>Native App</WorkTitle>
      <Box marginBottom={3}>
        <Badge colorScheme="blue" mr={4}>
          React Native
        </Badge>
        <Badge colorScheme="orange" mr={4}>
          Expo
        </Badge>
        <Badge colorScheme="orange" mr={4}>
          Node.js
        </Badge>
        <Badge colorScheme="red" mr={4}>
          Firebase
        </Badge>
      </Box>
      <Paragraph></Paragraph>
    </Container>
  );
};

export default NativeApp;
