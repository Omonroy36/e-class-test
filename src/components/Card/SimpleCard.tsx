import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Character, Favorite } from "../../utils/types";
import { useNavigate } from "react-router-dom";

type SimpleCardProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  item: Character | Favorite;
};

const statusColor = {
  Alive: "green.400",
  Dead: "red.400",
  Unknown: "gray.400",
};

export default function SimpleCard({ item, onClick }: SimpleCardProps) {
  const navigate = useNavigate();
  return (
    <Center py={6}>
      <Box
        onClick={() => navigate(`/details/${item?.id}`)}
        maxW={"320px"}
        cursor="pointer"
        w={"full"}
        bg={useColorModeValue("white", "gray.500")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={item?.image}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: statusColor[item?.status as keyof typeof statusColor],
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {item?.name}
        </Heading>
        <Stack mt={8} alignItems="center" direction={"row"} spacing={4}>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"red.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "red.500",
            }}
            _focus={{
              bg: "red.500",
            }}
          >
            Unfollow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
