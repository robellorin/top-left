import { useEffect, useState } from 'react'
import { ITicket } from 'src/common/models/Ticket'
import { ITicketColumn } from 'src/pages/HomePage/components/TicketBoard/TicketBoard.types'

interface IGetBoardResponse {
  board: string
  cards: ITicket[]
  columns: ITicketColumn[]
}

const API =
  'https://faas-tor1-70ca848e.doserverless.co/api/v1/web/fn-02deb0f8-29e6-4cbc-a43c-f79bb77f116c/default/dummy-data'

const useGetBoard = () => {
  const [data, setData] = useState<IGetBoardResponse>()
  const [loading, setLoading] = useState(true)
  const getBoardTickets = async () => {
    const response = await fetch(API, {
      method: 'GET'
    })

    const board = await response.json()
    setData(board)
    setLoading(false)
  }

  useEffect(() => {
    getBoardTickets()
  }, [])

  return { data, loading }
}

export default useGetBoard
