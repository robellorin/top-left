import Sidebar from 'src/common/components/Sidebar/Sidebar'
import useGetBoard from 'src/hooks/useGetBoard'
import TicketBoard from './components/TicketBoard/TicketBoard'

const HomePage = () => {
  const { data, loading } = useGetBoard()

  const getSidebarChildren = () => [
    <TicketBoard
      tickets={data && data.cards}
      columns={data && data.columns}
      loading={loading}
    />
  ]

  return (
    <>
      <Sidebar children={getSidebarChildren()} />
    </>
  )
}

export default HomePage
