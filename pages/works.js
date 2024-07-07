import { Container, Badge, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbWatcher from "../public/images/watcher.png";
import thumbLibrary from "../public/images/library.png";
import thumbTournament from "../public/images/dragonsports.png";
import thumbNative from "../public/images/react-native.png";
import thumbFlare from "../public/images/flare.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Box mb={5}>
        <Badge colorScheme="red" mr={4}>
          NOTE
        </Badge>

        <span>
          This page is still under development and does not contain all of the
          projects that I&apos;ve worked on!
        </span>
      </Box>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dragonsports" title="Tournament creation website" thumbnail={thumbTournament}>
            A tournament creation website, which I mainly created for me and my friends, to support
            us in creating and managing our own tournaments. Especially for the European Championship 2024.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="flare" title="My own app" thumbnail={thumbFlare}>
            Still under development. A mobile app that I am currently developing. Consists of
            a backend, marketing website, admin console and the mobile app itself.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="library" title="Library" thumbnail={thumbLibrary}>
            A web application to manage your books and their authors. Made with
            React, Chakra-UI, Node.js, GraphQl, Express and MongoDB. This
            project is a practice project to learn GraphQL with Node.js. The
            application has a JWT authentication system for login and
            authorization of adding and modifying books and authors.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="nativeApp"
            title="React Native App"
            thumbnail={thumbNative}
          >
            A practice project to learn React Native. The application is a
            simple movie rating application. This project is still in progress
            and currently just has a placeholder UI with github stuff.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="watcher" title="Watcher" thumbnail={thumbWatcher}>
            A desktop application to monitor your IoT devices and their sensors.
            Made with Java, Spring Boot, C++ and PostgreSQL.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
