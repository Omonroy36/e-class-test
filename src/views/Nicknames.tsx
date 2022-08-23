import React, { useState } from "react";
import ListNicknames from "../components/ListNicknames";
import { Select, Container } from "@chakra-ui/react";

type Order = "ASC" | "DESC";

export default function Nicknames() {
  const [order, setOrder] = useState<Order>("ASC");

  return (
    <Container maxW={"7xl"}>
      <Select
        variant={"filled"}
        color="white"
        placeholder="Select option"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setOrder(e.target.value as Order)
        }
        _placeholder={{
          color: "black",
        }}
        mt="10"
        defaultValue={"ASC"}
      >
        <option value="DESC">DESC</option>
        <option value="ASC">ASC</option>
      </Select>
      <ListNicknames names={["A", "B", "C", "D", "E"]} order={order} />
    </Container>
  );
}
