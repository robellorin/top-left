import { useState } from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TicketList from './components/TicketList'
import {
  TicketBoardColumns,
  TickerBoardColumnCards
} from './TicketBoard.constants'

import {
  ITicketBoardProps,
  ITicketColumn,
  ITicketBoardColumn
} from './TicketBoard.types'

import { getRelatedTickets, handleTicketDragEndUtil } from './TicketBoard.util'
import Ticket from './components/Ticket'
import { ITicket } from 'src/common/models/Ticket'

const TicketBoard = ({ tickets = [] }: ITicketBoardProps) => {
  const [cards, setCards] = useState(TickerBoardColumnCards)
  const handleTicketDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return
    const column: ITicketColumn = TicketBoardColumns.filter(
      (columnTemp: any) => columnTemp.id.toString() === source.droppableId
    )[0]

    if (!column) return

    handleTicketDragEndUtil(
      cards,
      setCards,
      draggableId,
      source,
      destination,
      column
    )
  }

  const TicketColumn = ({ column }: ITicketBoardColumn) => {
    const tickets = getRelatedTickets(column.statuses, cards)
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
          {(provided) => (
            <TicketList
              provided={provided}
              key={column.id.toString()}
              innerRef={provided.innerRef}
            >
              {tickets.map((ticket: ITicket, index: number) => (
                <Draggable draggableId={ticket.id.toString()} index={index}>
                  {(provided) => (
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

  return (
    <>
      <Flex color='white' gap={'0.9rem'}>
        <DragDropContext onDragEnd={handleTicketDragEnd}>
          {TicketBoardColumns.map((column: ITicketColumn) => (
            <TicketColumn column={column} key={column.id} />
          ))}
        </DragDropContext>
      </Flex>
    </>
  )
}

export default TicketBoard
