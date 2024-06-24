import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.700" color="white">
      <Text>&copy; {new Date().getFullYear()} My Web Application. All rights reserved.</Text>
      <Text>
        <Link href="/privacy-policy" color="teal.200">Privacy Policy</Link> | <Link href="/terms-of-service" color="teal.200">Terms of Service</Link>
      </Text>
    </Box>
  );
};

export default Footer;