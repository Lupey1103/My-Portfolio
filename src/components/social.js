import { HStack } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import React from "react";
import { FaGoogle, FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaInstagram} boxSize="50" />
      <Icon as={FaTiktok} boxSize="50" />
    </HStack>
  );
}
