import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box as="nav" bg="gray.700" color="white" py={4}>
      <Flex maxW="1200px" mx="auto" px={4} align="center" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">
          My Web Application
        </Text>
        <Flex>
          <Link as={RouterLink} to="/" mx={2} color="teal.200">
            Home
          </Link>
          <Link as={RouterLink} to="/about" mx={2} color="teal.200">
            About
          </Link>
          <Link as={RouterLink} to="/contact" mx={2} color="teal.200">
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;