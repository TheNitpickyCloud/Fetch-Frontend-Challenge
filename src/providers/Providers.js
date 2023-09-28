'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as JotaiProvider } from 'jotai'

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <JotaiProvider>
          {children}
        </JotaiProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}