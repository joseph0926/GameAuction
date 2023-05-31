import { Box, Button, Flex, Heading, List, ListIcon, ListItem, Text, chakra, useTheme } from "@chakra-ui/react";
import Link from "next/link";

import { links } from "@/src/utils/links.js";
import { Bar, MotionBar, MotionBox } from "../styles/NavbarStyles.js";

const Navbar = () => {
  const theme = useTheme();

  return (
    <Flex as="nav" role="navigation" justifyContent="space-between" alignItems="center" width="100%" p="36px" mb="30px">
      <Link href="/" passHref>
        <Heading as="h1">Logo</Heading>
      </Link>
      <List display={{ base: "none", md: "block" }}>
        <Flex justifyContent="center" alignItems="center" gap={6}>
          {links.map((link) => {
            return (
              <ListItem
                key={link.title}
                fontSize="xl"
                fontWeight="400"
                opacity="0.85"
                transition="opacity 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                _hover={{ opacity: 1, boxShadow: "0 2px 0 red" }}
              >
                <Link href={link.path} passHref>
                  {link.title}
                </Link>
              </ListItem>
            );
          })}
        </Flex>
      </List>
      <Box as="div" display={{ base: "flex", md: "none" }} w="50px" h="30px" flexDirection="column" cursor="pointer">
        <Bar />
        <Bar />
        <Bar />
      </Box>
      <Box as="div" display={{ base: "none", md: "block" }}>
        <Button
          mx="5px"
          bg="transparent"
          transition="all 0.4s"
          _hover={{ bg: theme.config.initialColorMode === "dark" ? theme.colors.darkPriText : theme.colors.lightPriText }}
        >
          Login
        </Button>
        <Button
          mx="5px"
          bg="transparent"
          transition="all 0.4s"
          _hover={{ bg: theme.config.initialColorMode === "dark" ? theme.colors.darkPriText : theme.colors.lightPriText }}
        >
          DarkMode
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
