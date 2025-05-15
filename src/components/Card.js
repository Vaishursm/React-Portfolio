import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../css/Card.css"

const Card = ({ title, description, imageSrc }) => {

  return (
  <VStack className="vstack-container">
    <Image src={imageSrc} size="2xl" borderRadius={8}/>
    <VStack className="vstack-inner-container" align="left">
    <Heading as="h4" size="md">{title}</Heading>
    <Text className="desc"> {description } </Text>
    <HStack spacing={2}>
     <Text>See more</Text>  <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
    </HStack>
    </VStack>
  </VStack>
  );
};

export default Card;
