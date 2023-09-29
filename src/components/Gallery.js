import { Box, Grid, Text, GridItem, Image, useDisclosure } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import ExpandedImage from "./ExpandedImage";

const Gallery = (props) => {
  const [selectedList, setSelectedList] = useAtom(props.selectedListAtom)
  const [dogImages, setDogImages] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState({})

  useEffect(() => {
    const allData = []
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
          result.message.slice(0, 15).map((dogImage) => {
            allData.push({image: dogImage, breed: dog.value})
          })
        })
      )
    }

    Promise.all(fetches).then(() => {
      const filteredFetches = []
      const filteredData = []

      allData.map((data) => {
        filteredFetches.push(
          fetch(data.image).then((res) => {
            if(res.ok){
              filteredData.push(data)
            }
          }).catch((err) => {
            console.log(err)
          })
        )
      })

      Promise.all(filteredFetches).then(() => {
        setDogImages(filteredData)
      })
    })
  }, [selectedList])

  const handleImageClick = (dog) => {
    setSelectedImage(dog)
    onOpen()
  }

  return ( 
    <Box>
      {selectedList.length == 0 ? 
        <Box marginTop="64px" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl">
            Select some dog breeds to see their images!
          </Text>
        </Box>
       :
        <Box marginTop="32px" marginBottom="32px" display="flex" justifyContent="center" alignItems="center">
          <ExpandedImage selectedImage={selectedImage} isOpen={isOpen} onClose={onClose} />
          <Grid overflowY="auto" maxHeight="66vh" padding="24px" templateColumns={'repeat(6, 150px)'} templateRows={'repeat(' + String(dogImages.length/6) + ', 150px)'} gap={8}>
            {
              dogImages.map((dog, index) => (
                <GridItem key={index} w='160px' h='160px' >
                  <Image onClick={() => handleImageClick(dog)} _hover={{ cursor: "pointer" }} borderRadius="8px" boxSize='160px' src={dog.image} alt="No image found, sorry!" />
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