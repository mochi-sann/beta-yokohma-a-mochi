import { Button } from '@chakra-ui/button'
import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { FaMapMarkedAlt } from 'react-icons/fa'

export type Props = {
  img: string
}

const CurrentLocationMap: React.VFC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        w="full"
        mt="2"
        leftIcon={<FaMapMarkedAlt />}
      >
        地図を見る
      </Button>
      <Drawer
        size="xl"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Button variant="black" w="full" mr={3} onClick={onClose}>
              閉じる
            </Button>
            {/* <DrawerCloseButton /> */}
            <Image mt="4" src={process.env.BASE_PATH + props.img} />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default CurrentLocationMap
