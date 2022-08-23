import React from "react";
import {
  Box,
  Stack,
  Badge,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { CharacterDetails } from "../../utils/types";

const statusColor = {
  Alive: "green.400",
  Dead: "red.400",
  Unknown: "gray.400",
};

type DetailCardProps = {
  character: CharacterDetails;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function DetailsCard({ character, onClick }: DetailCardProps) {
  const created = new Date(character.created);
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 24 }}
    >
      <Flex>
        <Image
          rounded={"md"}
          alt={"character image"}
          src={character.image}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={"header"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            color={"white"}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            {character.name}
          </Heading>
        </Box>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={<StackDivider borderColor={"gray.600"} />}
        >
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={"red.500"}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Features
            </Text>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
              <List spacing={2}>
                <ListItem color={"white"} fontWeight={"bold"}>
                  Gender:{" "}
                  <Text
                    color={"black"}
                    px={2}
                    py={1}
                    bg="gray.400"
                    fontWeight={"600"}
                  >
                    {character.gender}
                  </Text>
                </ListItem>{" "}
                <ListItem color={"white"} fontWeight={"bold"}>
                  Species:{" "}
                  <Text
                    color={"black"}
                    px={2}
                    py={1}
                    bg="gray.400"
                    fontWeight={"600"}
                  >
                    {character.species}
                  </Text>
                </ListItem>
              </List>
            </SimpleGrid>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={"red.500"}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              What is Known
            </Text>
            <List spacing={2}>
              <ListItem>
                <Text color={"white"} as={"span"} fontWeight={"bold"}>
                  Status:
                </Text>{" "}
                <Badge
                  px={2}
                  py={1}
                  bg={statusColor[character.status as keyof typeof statusColor]}
                  fontWeight={"600"}
                >
                  {character.status}
                </Badge>
              </ListItem>
              <ListItem>
                <Text color={"white"} as={"span"} fontWeight={"bold"}>
                  Origin:
                </Text>{" "}
                <Text px={2} py={1} bg="gray.400" fontWeight={"600"}>
                  {character.origin.name}
                </Text>
              </ListItem>
              <ListItem>
                <Text color={"white"} as={"span"} fontWeight={"bold"}>
                  Last known location:
                </Text>{" "}
                <Text px={2} py={1} bg="gray.400" fontWeight={"600"}>
                  {character.location.name}
                </Text>
              </ListItem>
              <ListItem>
                <Text color={"white"} as={"span"} fontWeight={"bold"}>
                  Created:
                </Text>{" "}
                <Text px={2} py={1} bg="gray.400" fontWeight={"600"}>
                  {created.toLocaleDateString()}
                </Text>
              </ListItem>
            </List>
          </Box>
        </Stack>
        <Button
          rounded={"full"}
          w={"full"}
          mt={8}
          size={"lg"}
          py={"7"}
          bg={"red.500"}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
          color="white"
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          Add to Favorites
        </Button>
      </Stack>
    </SimpleGrid>
  );
}
