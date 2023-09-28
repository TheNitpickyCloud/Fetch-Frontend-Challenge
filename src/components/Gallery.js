import { Box, Grid, Text, GridItem, Image, grid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const Gallery = (props) => {
  const [selectedList, setSelectedList] = useAtom(props.selectedListAtom)
  const [dogImages, setDogImages] = useState([])

  useEffect(() => {
    const gridData = []
    const fetches = []

    for(const dog of selectedList){
      const breedList = dog.value.split(" ")
      let queryString = "https://dog.ceo/api/breed/"

      for(const breed of breedList){
        queryString += breed + "/"
      }
  
      queryString += "images"
  
      fetches.push(
        fetch(queryString).then(res => res.json()).then(result => {
          result.message.slice(0, 10).map((dogImage) => {
            gridData.push(dogImage)
          })
        })
      )
    }

    Promise.all(fetches).then(() => {
      setDogImages(gridData)
    })
  }, [selectedList])

  return ( 
    <Box>
      {selectedList.length == 0 ? 
        <Box marginTop="64px" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl">
            Select some dog breeds to see their images!
          </Text>
        </Box>
       :
        <Box marginTop="32px" display="flex" justifyContent="center" alignItems="center">
          <Grid templateColumns='repeat(5, 100px)' templateRows='repeat(5, 100px)' gap={6}>
            {
              dogImages.map((dog, index) => (
                <GridItem key={index} w='100px' h='100px'>
                  <Image src={dog} alt="No image found, sorry!" />
                </GridItem>
              ))
            }
          </Grid>
        </Box>
      }
    </Box>
  );
}
 
export default Gallery;