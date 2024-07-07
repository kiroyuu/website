import { Container, Text, Heading, Box, Badge, UnorderedList, ListItem } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import { WorkTitle } from "../../components/works";

const Dragonsports = () => {
  return (
    <Container>
      <WorkTitle>DragonSports</WorkTitle>

      <Box marginBottom={3}>
        <Badge colorScheme="blue" mr={4}>Next.js</Badge>

        <Badge colorScheme="blue" mr={4}>Clerk</Badge>

        <Badge colorScheme="orange" mr={4}>Drizzle</Badge>

        <Badge colorScheme="orange" mr={4}>Sentry</Badge>

        <Badge colorScheme="red" mr={4}>Postgres</Badge>
      </Box>

      <Paragraph>Welcome to my latest project, a cutting-edge platform designed for creating, managing, and betting on sports tournaments. This project showcases the integration of various modern technologies to provide a seamless and engaging user experience.</Paragraph>

      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Technologies
      </Heading>

      <Paragraph>
        <UnorderedList>
          <ListItem>
            <Text as="span" fontWeight="bold">Next.js: </Text>Leveraged for its fast, responsive, and dynamic web performance capabilities, ensuring a smooth user interface and experience
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">Clerk: </Text>Implemented for secure and seamless user authentication and management, enhancing user security and ease of access.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">Drizzle: </Text>Utilized for efficient and reliable data handling, ensuring that all tournament data is managed and retrieved effectively.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">Sentry: </Text>Integrated for real-time error monitoring and issue tracking, providing a robust and reListItemable platform by quickly identifying and addressing any issues.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">Postgres: </Text>Chosen for its robust and scalable data storage solutions, allowing for efficient management of user and tournament data.
          </ListItem>
        </UnorderedList>
      </Paragraph>

      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Key features
      </Heading>

      <Paragraph>
        <UnorderedList>
          <ListItem>
            <Text as="span" fontWeight="bold">Create Tournaments: </Text>Easily set up tournaments for any sport or game with just a few clicks. Invite friends and start the competition!
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">Betting System: </Text>Add excitement by placing bets on tournament outcomes. Challenge your friends and see who comes out on top.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">Dashboard: </Text>Log in to access your personalized dashboard, where you can view your active tournaments, track historical data, and monitor your betting performance.
          </ListItem>

          <ListItem>
            <Text as="span" fontWeight="bold">Comprehensive Management: </Text>Our platform uses Drizzle and Postgres to ensure your data is stored and managed efficiently, providing you with a smooth and reliable experience.
          </ListItem>
        </UnorderedList>
      </Paragraph>
    </Container>
  );
};

export default Dragonsports;
