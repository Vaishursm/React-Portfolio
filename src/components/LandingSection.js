import React, { useEffect, useState } from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const url = "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const [avataricon, setAvatarIcon] = useState("");

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={3}>
        <Avatar src={url} size="2xl" />
        <VStack spacing={16}>
          <Heading as="h4" size="md">
            {greeting}
          </Heading>
          <VStack spacing={6}>
            <Heading>{bio1}</Heading>
            <Heading>{bio2}</Heading>
          </VStack>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
