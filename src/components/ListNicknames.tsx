import React from "react";
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

type ListNicknamesProps = {
  names: string[];
  order: "ASC" | "DESC";
};

const orderBy = {
  DESC: function (a: any, b: any) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  },
  ASC: function (a: any, b: any) {
    return a - b;
  },
};

export default function ListNicknames({ names, order }: ListNicknamesProps) {
  return (
    <Box>
      <UnorderedList className="nick-list">
        {names
          .sort(orderBy[order as keyof typeof orderBy])
          .map((name: string) => (
            <ListItem key={name}>{name}</ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
}
