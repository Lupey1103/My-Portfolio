import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import React from "react";

import {useNavigate} from 'react-router-dom'

export default function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  

  return (
      <Stack>
        <Circle
          position="absolute"
          bg="purple.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
        <Flex
          diirection={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"
        >
          <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">
              Hi, I am
            </Text>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              bgGradient="linear(to-r, teal.400, cyan.500, purple.600)"
              bgClip="text"
            >
              Christian Luperon
            </Text>
            <Text
              color={isDark ? "gray.200" : "gray.500"}
              fontWeight="semibold"
            >
              Full Stack Software Engineer, 4Geeks Academy Graduate, Teachers
              Assistant, and Frequent Learner.
            </Text>
            <Button
              mt={8}
              w="100%"
              bgGradient="linear(to-r, teal.400, purple.500)"
              onClick={() => navigate("/resume")
              }
            >
              Hire Me
            </Button>
          </Box>
          <Image
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            borderRadius="full"
            backgroundColor="transparent"
            baxShadow="lg"
            boxSize="300px"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEYkEVv0XrvaQ/profile-displayphoto-shrink_800_800/0/1657144838527?e=1669852800&v=beta&t=5O-x3y51bDJAk4xaKJemWhwpGgv_inyMnuJNvIYIDoo"
          />
        </Flex>
      </Stack>
  );
}
