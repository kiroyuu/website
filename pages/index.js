import NextLink from "next/link";
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius={"lg"}
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        mb={6}
        p={3}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Tampere!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joel Helkala
          </Heading>
          <p>Digital Craftzman ( Developer / Designer / Tinkerer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Joel is a full-stack developer based in Tampere with a passion for
          building digital services/stuff he wants. He has a quick knack for
          learning new technologies and is always looking for new challenges.
          His freetime is spent tinkering with electronics and solving real life
          problems with code. When not online he can be found in the gym or
          participating in some kind of sport. In the future he hopes to be able
          to use his skills to help wild animals and the environment. Joel is
          also planning on starting a blog about his journey as a software
          developer and also start a youtube channel where he will be
          documenting his projects.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Kouvola, Finland.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at multiple summer jobs in web development, automation
            testing and embedded systems development.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Master&apos;s Programme in Information Technology at
            the University of Jyväskylä.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working at Patria as a software developer.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Sports, Programming, Drawing, Nature, Learning</Paragraph>
        </Section>
      </Section>
    </Container>
  );
};

export default Page;
