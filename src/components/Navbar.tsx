import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrClose, GrMenu } from "react-icons/gr";
import { BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <GrClose /> : <GrMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box onClick={() => navigate("/")} cursor={"pointer"}>
              <Avatar
                src={
                  "https://w7.pngwing.com/pngs/277/446/png-transparent-rick-and-morty-illustratrion-rick-sanchez-morty-smith-rick-and-morty-season-1-television-show-youtube-rick-and-morty-television-logo-computer-wallpaper.png"
                }
                mb={2}
              />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  bg="red.500"
                  icon={<BsFillHeartFill fontSize="1.5rem" />}
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
