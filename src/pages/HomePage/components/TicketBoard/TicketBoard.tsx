/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { DragDropContext } from 'react-beautiful-dnd'

import { ITicketBoardProps, ITicketColumn } from './TicketBoard.types'

import { handleTicketDragEndUtil } from './TicketBoard.util'

import TicketColumn from './components/TicketColumn'

const TicketBoard = ({ tickets, columns, loading }: ITicketBoardProps) => {
  const [cards, setCards] = useState(tickets)

  useEffect(() => {
    if (!loading) {
      setCards(tickets)
    }
  }, [loading])

  const handleTicketDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return
    const column: ITicketColumn | undefined = columns?.filter(
      (columnTemp: any) => columnTemp.id.toString() === source.droppableId
    )[0]

    if (!column) return

    handleTicketDragEndUtil(
      cards,
      setCards,
      draggableId,
      source,
      destination,
      column,
      columns
    )
  }

  return (
    <>
      <Box>
        <Flex color='white' gap={'0.9rem'}>
          {loading ? (
            <Spinner color='primary' size={'xl'} ml={'45%'} mt={'20%'} />
          ) : (
            <DragDropContext onDragEnd={handleTicketDragEnd}>
              {columns &&
                columns.map((column: ITicketColumn) => (
                  <TicketColumn column={column} key={column.id} cards={cards} />
                ))}
            </DragDropContext>
          )}
        </Flex>
      </Box>
    </>
  )
}

export default TicketBoard
