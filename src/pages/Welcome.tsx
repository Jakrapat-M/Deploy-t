
import { Box, Heading, Text, Center, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <Center height="100vh">
      <Box p={8} textAlign="center">
        <Center>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Box mb={4}>
              <Image
                borderRadius="full"
                boxSize="15rem"
                src="/src/assets/profile_img.jpg"
                alt="Jakrapat"
                fit={"cover"}
              />
            </Box>
          </motion.div>
        </Center>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Heading as="h1" size="xl">
            Welcome to My Portfolio Website
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Box mt={4}>
            <Text fontSize="lg">
              Thank you for visiting my portfolio! Here, you can learn more
              about my skills, projects, and experiences.
            </Text>
          </Box>
          <Box mt={4}>
            <Heading as="h1" size="md">
              - Jakrapat Matures -
            </Heading>
          </Box>
        </motion.div>
      </Box>
    </Center>
  );
};

export default Welcome;
