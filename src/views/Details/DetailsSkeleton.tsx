import React from "react";
import {
  Box,
  Skeleton,
  Flex,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";

export default function DetailsSkeleton() {
  return (
    <Flex
      padding="6"
      boxShadow="lg"
      bg={useColorModeValue("gray.100", "gray.900")}
      rounded={"lg"}
      mt="16"
    >
      <Box width="50%">
        <Skeleton height="400px" width="200" rounded={"lg"} />
      </Box>
      <Box width="50%">
        <SkeletonText mt="4" noOfLines={7} spacing="4" height="60px" p="6" />
      </Box>
    </Flex>
  );
}
