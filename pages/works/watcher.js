import { Container, Heading, Badge } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import GithubLink from "../../components/icons/github";
import { WorkTitle } from "../../components/works";

const Watcher = () => {
  return (
    <Container>
      <WorkTitle>Watcher</WorkTitle>
      <Badge colorScheme="blue" mr={4}>
        Java
      </Badge>
      <Badge colorScheme="orange" mr={4}>
        Spring Boot
      </Badge>
      <Badge colorScheme="orange" mr={4}>
        C++
      </Badge>
      <Badge colorScheme="red" mr={4}>
        PostgreSQL
      </Badge>
      <Paragraph>
        Watcher was a project which I did for a computer science course. The
        goal was to learn more about desktop applications and how to build them.
        I decided to build a simple application with Java Swing and Java Spring
        Boot. The application has login system with Json Web Tokens and normal
        and admin users. The application has a simple CRUD system for users and
        a simple CRUD system for IoT devices.
      </Paragraph>
      <Paragraph>
        The application is a simple IoT device management system. The
        application has a dashboard from which users can observe the
        measurements of the connected IoT devices. Users can also view history
        data with histograms and other graphs. Admin users have the ability to
        lock and/or delete users.
      </Paragraph>
      <GithubLink href="https://github.com/kiroyuu/Watcher">
        Source code
      </GithubLink>
    </Container>
  );
};

export default Watcher;
