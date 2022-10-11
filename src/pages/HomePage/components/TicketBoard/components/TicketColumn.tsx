import { Box, Flex, Text } from '@chakra-ui/react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { ITicket } from 'src/common/models/Ticket'
import { ITicketBoardColumn } from '../TicketBoard.types'
import { getRelatedTickets } from '../TicketBoard.util'
import Ticket from './Ticket'
import TicketList from './TicketList'

const TicketColumn = ({ column, cards }: ITicketBoardColumn) => {
  const tickets = getRelatedTickets(column.statuses, cards ?? [])
  return (
    <Box bg='gray.200' w='25%' color='black' minH={'100vh'} borderRadius={20}>
      <Box
        bg='gray.300'
        w='100%'
        height={'48px'}
        py={3}
        px={2}
        borderRadius={5}
      >
        <Flex justifyContent={'space-between'}>
          <Text> {column.name} </Text>
          <Box bg={'gray.600'} w='22px' h='19px' borderRadius={5}>
            <Flex justifyContent={'center'} alignContent={'center'}>
              <Text color={'white'} fontSize={12}>
                {tickets.length}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Droppable droppableId={column.id.toString()}>
        {(provided, snapshot) => (
          <TicketList
            provided={provided}
            key={column.id.toString()}
            innerRef={provided.innerRef}
          >
            {tickets.map((ticket: ITicket, index: number) => (
              <Draggable
                draggableId={ticket.id.toString()}
                index={index}
                key={ticket.id.toString()}
              >
                {(provided, snapshot) => (
                  <Ticket
                    provided={provided}
                    innerRef={provided.innerRef}
                    key={ticket.id.toString()}
                    ticket={ticket}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </TicketList>
        )}
      </Droppable>
    </Box>
  )
}

export default TicketColumn
