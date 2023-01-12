import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbWatcher from "../public/images/watcher.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="watcher" title="Watcher" thumbnail={thumbWatcher}>
            A desktop application to monitor your IoT devices and their sensors.
            Made with Java, Spring Boot, and PostgreSQL.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
