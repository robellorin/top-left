import Sidebar from 'src/common/components/Sidebar/Sidebar'
import TicketBoard from './components/TicketBoard/TicketBoard'

const HomePage = () => {
  const getSidebarChildren = () => [<TicketBoard />]
  return (
    <>
      <Sidebar children={getSidebarChildren()} />
    </>
  )
}

export default HomePage
