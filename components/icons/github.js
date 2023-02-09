import { Container, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const GithubIcon = () => {
  return (
    <Container>
      <Box p={2} display="flex" alignItems="center">
        <ExternalLinkIcon color="red.500" mr={2} />
        <Link href="https://github.com/kiroyuu/Watcher" isExternal>
          Github
        </Link>
      </Box>
    </Container>
  );
};

export default GithubIcon;
