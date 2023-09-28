import '../app/globals.css'
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useAtom } from "jotai";
import { useEffect } from 'react';

const Search = (props) => {
  const [selectedList, setSelectedList] = useAtom(props.selectedListAtom)

  return ( 
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        {/* <InputGroup mt="32px" w="2xl" >
          <InputRightElement>
            <MagnifyingGlassIcon width="26px" height="26px" />
          </InputRightElement>
          <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={(e) => handleNewEntry(e)} borderColor="gray.500" focusBorderColor="gray.600" borderWidth="2px" _hover={{ borderColor: "gray.800" }} />
        </InputGroup> */}
        <Box mt="32px" w="2xl">
          <Select
            className='selectInput'
            focusBorderColor="gray.700"
            placeholder="Search for a dog breed..."
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions
            onChange={setSelectedList}
            options={props.availableBreeds}
          />
        </Box>
      </Box>
    </Box>
  );
}
 
export default Search;