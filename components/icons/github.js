import { Container, Link, Box } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io";

const GithubLink = ({ children, href }) => {
  return (
    <Container>
      <Box p={2} display="flex" alignItems="center">
        <IoLogoGithub />
        <Link href={href} isExternal marginLeft={3}>
          {children}
        </Link>
      </Box>
    </Container>
  );
};

export default GithubLink;
