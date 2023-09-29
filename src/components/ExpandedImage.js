import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Box, Button, Image } from '@chakra-ui/react';

const ExpandedImage = (props) => {
  return ( 
    <Box>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{props.selectedImage.breed}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image borderRadius="8px" boxSize="md" src={props.selectedImage.image} alt="No image found, sorry!" />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Box>
  );
}
 
export default ExpandedImage;