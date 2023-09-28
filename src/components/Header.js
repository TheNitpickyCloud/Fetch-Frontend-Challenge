import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return ( 
    <Box borderBottom="2px" borderColor="gray.400" display="flex" justifyContent="center" alignItems="center" w="full" h="96px">
      <Text fontSize="3xl">
        Dogs!
      </Text>
    </Box>
  );
}
 
export default Header;