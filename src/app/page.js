"use client"

import { Box } from "@chakra-ui/react"
import { atom } from "jotai"
import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Search from "@/components/Search"
import Gallery from "@/components/Gallery"

export default function Home() {
  const selectedListAtom = atom([])
  const [availableBreeds, setAvailableBreeds] = useState([])

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all").then((res) => res.json()).then((result) => {
      const localAvailableBreeds = []

      for(const breed in result.message){
        localAvailableBreeds.push({value: breed, label: breed})

        result.message[breed].map(subBreed => {
          localAvailableBreeds.push({value: breed + " " + subBreed, label: breed + " " + subBreed})
        })
      }

      setAvailableBreeds(localAvailableBreeds)
    })
  }, [])

  return (
    <Box>
      <Header />
      <Search availableBreeds={availableBreeds} selectedListAtom={selectedListAtom} />
      <Gallery selectedListAtom={selectedListAtom} />
    </Box>
  )
}
