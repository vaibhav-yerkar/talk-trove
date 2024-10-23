import React from "react";
import { Box, Button } from "@chakra-ui/react";

const CommandOverlay = ({ onSelect }) => {
  return (
    <Box 
    display="flex"
    flexDir="column"
    bg="transparent" p={4} rounded="md" zIndex={1} w="100%">
      {/* <Button onClick={() => onSelect("llama")} mb={2} bg="blackAlpha.50">/llama : Ask Llama</Button> */}
      <Button onClick={() => onSelect("gemini")} bg="blackAlpha.50">/gemini : prompt Gemini</Button>
    </Box>
  );
};

export default CommandOverlay;
