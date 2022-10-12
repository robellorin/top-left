import { useState } from 'react'
import Sidebar from 'src/common/components/Sidebar/Sidebar'
import useGetBoard from 'src/hooks/useGetBoard'
import TicketBoard from './components/TicketBoard/TicketBoard'

const HomePage = () => {
  const { data, loading } = useGetBoard()
  const [selected, setSelected] = useState(0)

  const getSidebarChildren = () => [
    <TicketBoard
      tickets={data && data.cards}
      columns={data && data.columns}
      loading={loading}
    />
  ]

  return (
    <>
      <Sidebar
        children={getSidebarChildren()}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  )
}

export default HomePage
