import {
  Box,
  Container,
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
  Alert,
  Text,
  AlertIcon,
} from "@chakra-ui/react";
import DetailsSkeleton from "./DetailsSkeleton";
import { GET_CHARACTER_BY_ID, useQuery } from "../../apollo/queries";
import { useParams } from "react-router-dom";

const statusColor = {
  Alive: "green.400",
  Dead: "red.400",
  Unknown: "gray.400",
};

export default function Details() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  return (
    <Container maxW={"7xl"}>
      {loading ? (
        <DetailsSkeleton />
      ) : (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"character image"}
              src={data?.character.image}
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
                {data?.character.name}
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
                        {data?.character.gender}
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
                        {data?.character.species}
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
                      bg={
                        statusColor[
                          data?.character.status as keyof typeof statusColor
                        ]
                      }
                      fontWeight={"600"}
                    >
                      {data?.character.status}
                    </Badge>
                  </ListItem>
                  <ListItem>
                    <Text color={"white"} as={"span"} fontWeight={"bold"}>
                      Origin:
                    </Text>{" "}
                    <Text px={2} py={1} bg="gray.400" fontWeight={"600"}>
                      {data?.character.origin.name}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text color={"white"} as={"span"} fontWeight={"bold"}>
                      Last known location:
                    </Text>{" "}
                    <Text px={2} py={1} bg="gray.400" fontWeight={"600"}>
                      {data?.character.location.name}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text color={"white"} as={"span"} fontWeight={"bold"}>
                      Created:
                    </Text>{" "}
                    <Text px={2} py={1} bg="gray.400" fontWeight={"600"}>
                      {data?.character.created}
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
      )}
    </Container>
  );
}
