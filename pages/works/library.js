import { Container, Heading, Box, Badge } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import GithubLink from "../../components/icons/github";

const Library = () => {
  return (
    <Container>
      <Heading>Library</Heading>
      <Box marginBottom={3}>
        <Badge colorScheme="blue" mr={4}>
          React
        </Badge>
        <Badge colorScheme="orange" mr={4}>
          GraphQL
        </Badge>
        <Badge colorScheme="orange" mr={4}>
          Node.js
        </Badge>
        <Badge colorScheme="red" mr={4}>
          MongoDB
        </Badge>
      </Box>
      <Paragraph>
        A web application to manage your books and their authors. Made with
        React, Chakra-UI, Node.js, GraphQl, Express and MongoDB. This project is
        a practice project to learn GraphQL with Node.js. The application has a
        JWT authentication system for login and authorization of adding and
        modifying books and authors.
      </Paragraph>
      <Paragraph>
        In this project, I learned how to use GraphQL with Node.js and Express.
        I also learned how to use JWT for authentication and authorization with
        Node.js. I didn&apos;t spent pretty much any time focusing on the UI
        side of the application.
      </Paragraph>
      <GithubLink href="https://github.com/kiroyuu/library">
        Source code
      </GithubLink>
    </Container>
  );
};

export default Library;
