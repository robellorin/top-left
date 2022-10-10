import { ITicket } from 'src/common/models/Ticket'
import { TicketBoardColumns } from './TicketBoard.constants'
import { ITicketColumn } from './TicketBoard.types'

export const getRelatedTickets = (
  statuses: string[],
  tickets: ITicket[]
): ITicket[] => {
  return tickets.filter((ticket: ITicket) => statuses.includes(ticket?.status))
}

export const handleTicketDragEndUtil = (
  cards: any,
  setCards: any,
  draggableId: string,
  source: any,
  destination: any,
  column: ITicketColumn
) => {
  // Same column just change ordering of tickets

  if (destination.droppableId === source.droppableId) {
    if (cards?.length === 0) return
    const cardsTemp = getRelatedTickets(column.statuses, cards)
    const currentCards: any[] = [...cardsTemp]
    for (let i = 0; i < currentCards.length; i++) {
      const card = currentCards[i]
      card.index = i
    }

    let destinationFound = false
    let cardToChange = null
    if (source.index < destination.index) {
      let sourceFound = false
      for (let i = 0; i < currentCards.length; i++) {
        const card = currentCards[i]
        const tempIndex = card.index
        if (draggableId === card.id.toString()) {
          cardToChange = card
        } else if (!destinationFound && sourceFound) {
          card.index -= 1
        }
        if (source.index === card.index) {
          sourceFound = true
        }
        if (destination.index === tempIndex) {
          cardToChange.index = destination.index
          destinationFound = true
        }
      }

      const newArray = []
      for (let i = 0; i < cardsTemp.length; i++) {
        const card = cardsTemp.filter((card: any) => card.index === i)[0]
        newArray.push(card)
      }
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        let found = false
        for (let a = 0; a < newArray.length; a++) {
          const card2 = newArray[a]
          if (card?.id === card2?.id) {
            found = true
            break
          }
        }
        if (!found) newArray.push(card)
      }
      setCards(newArray)
    } else if (source.index > destination.index) {
      for (let i = source.index; i >= 0; i--) {
        const card = currentCards[i]
        const tempIndex = card.index
        if (draggableId === card.id.toString()) {
          cardToChange = card
        } else if (!destinationFound) {
          card.index += 1
        }
        if (destination.index === tempIndex) {
          cardToChange.index = destination.index
          destinationFound = true
        }
      }

      const newArray = []
      for (let i = 0; i < cardsTemp.length; i++) {
        const card = cardsTemp.filter((card: any) => card.index === i)[0]
        newArray.push(card)
      }
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        let found = false
        for (let a = 0; a < newArray.length; a++) {
          const card2 = newArray[a]
          if (card?.id === card2?.id) {
            found = true
            break
          }
        }
        if (!found) newArray.push(card)
      }
      setCards(newArray)
    }
  }
  // Different Columns
  else {
    const destinationColumn: ITicketColumn = TicketBoardColumns.filter(
      (columnTemp: any) => columnTemp.id.toString() === destination.droppableId
    )[0]

    if (!destinationColumn) return
    if (cards?.length === 0) return
    const statuses = destinationColumn.statuses

    if (statuses?.length === 0) return

    const cardsTemp = [...cards]
    const currentCards: any[] = getRelatedTickets(statuses, cardsTemp)
    const card = cardsTemp.filter(
      (cardTemp: any) => cardTemp?.id?.toString() === draggableId
    )[0]

    card.status = statuses[0]

    // If card is dropped at end
    if (destination.index > currentCards.length - 1) {
      currentCards.push(card)
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        let found = false
        for (let a = 0; a < currentCards.length; a++) {
          const card2 = currentCards[a]
          if (card?.id === card2?.id) {
            found = true
            break
          }
        }
        if (!found) currentCards.push(card)
      }
      setCards(currentCards)
    }
    // If card is dropped at start
    else if (destination.index === 0) {
      card.index = 0
      currentCards.unshift(card)

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        let found = false
        for (let a = 0; a < currentCards.length; a++) {
          const card2 = currentCards[a]
          if (card?.id === card2?.id) {
            found = true
            break
          }
        }
        if (!found) currentCards.push(card)
      }
      setCards(currentCards)
    }
    // If card is dropped in the middle
    else {
      for (let i = 0; i < currentCards.length; i++) {
        const card2 = currentCards[i]
        card2.index = i
      }
      let indexReached = false
      for (let i = 0; i < currentCards.length; i++) {
        const card2 = currentCards[i]
        if (card2.index === destination.index) {
          card2.index += 1
          indexReached = true
          card.index = destination.index
        } else if (indexReached) {
          card2.index += 1
        }
      }
      currentCards.push(card)

      const newArray = []
      for (let i = 0; i < currentCards.length; i++) {
        const card2 = currentCards.filter((card3: any) => card3?.index === i)[0]
        if (card2) {
          newArray.push(card2)
        }
      }

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        let found = false
        for (let a = 0; a < newArray.length; a++) {
          const card2 = newArray[a]
          if (card?.id === card2?.id) {
            found = true
            break
          }
        }
        if (!found) newArray.push(card)
      }
      setCards(newArray)
    }
  }
}
