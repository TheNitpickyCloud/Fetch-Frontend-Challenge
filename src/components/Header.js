import { Box, Text, Image } from "@chakra-ui/react";

const Header = () => {
  return ( 
    <Box pl="20px" pr="20px" borderBottom="2px" borderColor="gray.400" display="flex" justifyContent="space-between" alignItems="center" w="full" h="96px">
      <Image boxSize="85px" src="/icon.png" alt="Oops!"></Image>
      <Text fontSize="3xl">
        Dogs!
      </Text>
      <Box boxSize="85px"></Box>
    </Box>
  );
}
 
export default Header;