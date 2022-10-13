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
    <Flex
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      bg={'white'}
      w='100%'
      h='122px'
      px={2}
      flexDir="column"
      borderRadius={10}
      key={ticket.id.toString()}
    >
      <Flex
        flex={0.3}
        w="100%"
        flexDir="row"
        justifyContent="space-between"
      >
        <Flex flexDir="column">
          <Text pt={1.5} fontSize={12}>
            {ticket.title}
          </Text>
          <Text fontSize={10} color='gray.700'>
            {ticket.company}
            {ticket.id % 4 === 0 && ',Twitter'}
          </Text>
        </Flex>
        <Text pt={2.5} color='gray.700' fontSize={12}>
          $452
        </Text>
      </Flex>
      <Flex
        flex={0.3}
        w="100%"
        flexDir="row"
        alignItems="center"
      >
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
      <Flex
        flex={0.3}
        w="100%"
        flexDir="row"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Text pt={3} color='gray.700' fontSize={9}>
            Status name for x week
          </Text>
          <Box>
            <Box
              h='22px'
              bg={getPriorityColor(ticket.priority, 1)}
              width={'74px'}
              borderRadius={10}
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
  )
}

export default Ticket
