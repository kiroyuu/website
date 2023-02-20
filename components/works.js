import { Box, Link, Heading } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const WorkTitle = ({ children }) => {
  return (
    <Box display="flex">
      <Link href={"/works"}>Works</Link>
      <span>
        {" "}
        <ChevronRightIcon />{" "}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};
