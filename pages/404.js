import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1"></Heading>
      <Text>The page your&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
