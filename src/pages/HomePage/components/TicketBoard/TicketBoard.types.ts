import { ITicket } from 'src/common/models/Ticket'

export interface ITicketColumn {
  id: number
  name: string
  statuses: string[]
}

export interface ITicketList {
  children: any
  innerRef: any
  provided: any
}

export interface ITicketBoardCard {
  ticket: ITicket
  innerRef: any
  provided: any
}

export interface ITicketBoardColumn {
  column: ITicketColumn
  cards: ITicket[] | undefined
}

export interface ITicketBoardProps {
  tickets?: ITicket[]
  columns?: ITicketColumn[]
  loading: boolean
}
