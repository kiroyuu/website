import { Container, Box, Badge } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import { WorkTitle } from "../../components/works";
import thumb from "../../public/images/ai-calorie.png";
import Image from "next/image";

const CalorieAI = () => {
	return (
		<Container>
			<WorkTitle>Rakuu Macro AI</WorkTitle>

			<Box marginBottom={3}>
				<Badge colorScheme="blue" mr={4}>
					Next.js
				</Badge>

				<Badge colorScheme="blue" mr={4}>
					Clerk
				</Badge>

				<Badge colorScheme="orange" mr={4}>
					Drizzle
				</Badge>

				<Badge colorScheme="orange" mr={4}>
					Sentry
				</Badge>

				<Badge colorScheme="red" mr={4}>
					Postgres
				</Badge>
			</Box>

			<Paragraph>
				Rakuu Macro AI is a React Native mobile application that leverages
				artificial intelligence to help users track their calorie intake. By
				simply typing in the food they consume, users can receive accurate
				calorie counts and nutritional information, making it easier to maintain
				a healthy diet. Users can also track their weight and goals over time.
			</Paragraph>

			<Box marginTop={10} width="200px" height="400px">
				<Image
					alt="AI Calorie Tracker Screenshot"
					src={thumb}
					style={{
						borderRadius: "8px",
					}}
				/>
			</Box>
		</Container>
	);
};

export default CalorieAI;
