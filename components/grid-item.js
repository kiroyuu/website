import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w="100%" textAlign="center">
		<LinkBox cursor="pointer">
			<Image
				src={thumbnail}
				alt={title}
				className="grid-item-thumbnail"
				placeholder="blur"
				loading="lazy"
			/>

			<LinkOverlay href={href} target="_blank">
				<Text mt={2}>{title}</Text>
			</LinkOverlay>

			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
);

export const WorkGridItem = ({ children, id, title, imageUrl }) => {
	return (
		<Box w="100%">
			<Global
				styles={css`
          .grid-item-thumbnail {
            border-radius: 8px;
          }
        `}
			/>
			<LinkBox
				cursor="pointer"
				display="flex"
				flexDirection="column"
				gap={3}
				height="100%"
			>
				<Box h="100px" w="full" position="relative" overflow="hidden">
					<img
						src={imageUrl}
						alt={title}
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="grid-item-thumbnail"
						placeholder="blur"
					/>
				</Box>

				<NextLink href={`/works/${id}`} passHref scroll={false}>
					<LinkOverlay>
						<Text mt={3} fontSize={20} fontWeight="semibold">
							{title}
						</Text>
					</LinkOverlay>
				</NextLink>

				<Text fontSize={14} mt={2} color="gray.500" noOfLines={3}>
					{children}
				</Text>
			</LinkBox>
		</Box>
	);
};
