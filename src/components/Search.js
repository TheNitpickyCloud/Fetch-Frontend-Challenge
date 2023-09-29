import '../app/globals.css'
import { Box } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useAtom } from "jotai";

const Search = (props) => {
  const [selectedList, setSelectedList] = useAtom(props.selectedListAtom)

  return ( 
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
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