import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { ITicketList } from '../TicketBoard.types'

const TicketList = ({ children, innerRef, provided }: ITicketList) => {
  return (
    <>
      <Box px={3} ref={innerRef} {...provided.droppableProps}>
        <Flex flexDirection={'column'} gap='0.8rem'>
          {children}
        </Flex>
      </Box>
    </>
  )
}

export default TicketList
