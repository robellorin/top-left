import React from 'react'

import { Box, Flex, Avatar, Text } from '@chakra-ui/react'
import { ITicketBoardCard } from '../TicketBoard.types'

const Ticket = ({ ticket, innerRef, provided }: ITicketBoardCard) => {
  const getPriorityColor = (priority: string, type: number) => {
    const priorityNumber = priority.split(' ')[1]
    let color = ''
    if (type === 1) {
      if (priorityNumber === '1') {
        color = 'red.300'
      } else if (priorityNumber === '2') {
        color = 'yellow.300'
      } else if (priorityNumber === '3') {
        color = 'green.400'
      } else if (priorityNumber === '4') {
        color = 'blue.200'
      }
    } else {
      if (priorityNumber === '1') {
        color = 'red.700'
      } else if (priorityNumber === '2') {
        color = 'yellow.800'
      } else if (priorityNumber === '3') {
        color = 'green.800'
      } else if (priorityNumber === '4') {
        color = 'blue.800'
      }
    }
    return color
  }

  return (
    <Box
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      bg={'white'}
      w='100%'
      h='122px'
      px={2}
      borderRadius={10}
      key={ticket.id.toString()}
    >
      <Flex justifyContent={'space-between'}>
        <Flex flexDirection={'column'}>
          <Text pt={1.5} fontSize={12}>
            {ticket.title}
          </Text>
          <Box pt={0.5} pb={1}>
            <Flex>
              <Text fontSize={10} color='gray.700'>
                {ticket.company}
                {ticket.id % 4 === 0 && ',Twitter'}
              </Text>
            </Flex>
          </Box>
          <Flex>
            <Avatar
              size={'xs'}
              src={
                'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
            {ticket.id % 4 === 0 && (
              <Avatar
                size={'xs'}
                src={
                  'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
            )}
          </Flex>
          <Text pt={3} color='gray.700' fontSize={9}>
            Status name for x week
          </Text>
        </Flex>
        <Flex flexDirection={'column'} justifyContent='space-between'>
          <Text pt={2.5} color='gray.700' fontSize={12}>
            $452
          </Text>
          <Box position={'relative'}>
            <Box
              h='22px'
              bg={getPriorityColor(ticket.priority, 1)}
              top={'-20px'}
              right={'2px'}
              width={'74px'}
              borderRadius={10}
              position={'absolute'}
            >
              <Text
                sx={{ wordWrap: 'normal' }}
                fontSize={10}
                textAlign='center'
                pt={1}
                color={getPriorityColor(ticket.priority, 2)}
                fontWeight={500}
              >
                {ticket.priority}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Ticket
