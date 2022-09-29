import { Flex, Heading, VStack, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/header";
import Social from "./components/social";
import Profile from "./components/profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Lupey
        </Heading>
        <Spacer></Spacer>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/Lupey1103")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() => window.open("https://www.linkedin.com/in/christian-luperon/")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
