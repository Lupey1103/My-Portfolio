import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { BiDesktop } from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
import { SiFirebase } from "react-icons/si";
import { Icon } from "@chakra-ui/icon";

export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1.5
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experiance
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Web Developer, specializing in desktop and mobile development.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="purple.400"
          h="30vh"
          w="30vh"
          justify="flex-end"
        >
          <Icon color="white" p="4" as={BiDesktop} w="24" h="24" />
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            Web Apps
          </Text>
        </Flex>
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          ml={isNotSmallerScreen ? 4 : 0}
          bg="purple.400"
          h="30vh"
          w="30vh"
          justify="flex-end"
          _hover={{ bg: "teal.400" }}
        >
          <Icon color="white" p="4" as={GiConsoleController} w="24" h="24" />
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            Video Games
          </Text>
        </Flex>
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          ml={isNotSmallerScreen ? 4 : 0}
          bg="purple.400"
          h="30vh"
          w="30vh"
          justify="flex-end"
          _hover={{ bg: "cyan.400" }}
        >
          <Icon color="white" p="4" as={SiFirebase} w="24" h="24" />
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            Firebase
          </Text>
        </Flex>
        </Flex>
        
      </Box>
    </Flex>
  );
}
