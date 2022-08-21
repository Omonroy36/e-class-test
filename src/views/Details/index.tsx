import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { GET_CHARACTER_BY_ID, useQuery } from "../../apollo/queries";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  return (
    <Container maxW={"7xl"}>
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
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("red.500", "red.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem color={"white"}>Chronograph</ListItem>
                  <ListItem color={"white"}>
                    Master Chronometer Certified
                  </ListItem>{" "}
                  <ListItem color={"white"}>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem color={"white"}>Anti‑magnetic</ListItem>
                  <ListItem color={"white"}>Chronometer</ListItem>
                  <ListItem color={"white"}>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("red.500", "red.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text color={"white"} as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
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
            bg={useColorModeValue("red.400", "red.500")}
            color={useColorModeValue("white", "gray.900")}
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
    </Container>
  );
}
