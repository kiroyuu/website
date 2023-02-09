import { Container, Heading } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import GithubIcon from "../../components/icons/github";

const Watcher = () => {
  return (
    <Container>
      <Heading>Watcher</Heading>
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
      <GithubIcon />
    </Container>
  );
};

export default Watcher;
