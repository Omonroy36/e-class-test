import React from "react";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CardSkeleton() {
  return (
    <Box
      padding="6"
      boxShadow="lg"
      bg={useColorModeValue("gray.100", "gray.900")}
      rounded={"lg"}
    >
      <SkeletonCircle size="50" />
      <SkeletonText mt="4" noOfLines={2} spacing="4" height="20px" />
      <Skeleton height="20px" rounded={"lg"} mt="9" />
    </Box>
  );
}
