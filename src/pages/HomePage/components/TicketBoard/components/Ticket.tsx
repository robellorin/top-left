import { Box, Flex, Avatar, Text } from '@chakra-ui/react'
import { ITicketBoardCard } from '../TicketBoard.types'

const Ticket = ({ ticket, innerRef, provided }: ITicketBoardCard) => {
  return (
    <Box
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      bg={'white'}
      w='100%'
      h='122px'
      px={2}
      borderRadius={10}
      key={ticket.id.toString()}
    >
      <Flex justifyContent={'space-between'}>
        <Flex flexDirection={'column'}>
          <Text pt={1.5} fontSize={14}>
            {ticket.title}
          </Text>
          <Text pt={0.5} pb={1} fontSize={10} color='gray.700'>
            {ticket.company}
          </Text>
          <Avatar
            size={'sm'}
            src={
              'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Text pt={3} color='gray.700' fontSize={9}>
            Status name for x week
          </Text>
        </Flex>
        <Flex flexDirection={'column'} justifyContent='space-between'>
          <Text pt={2.5} color='gray.700' fontSize={12}>
            $452
          </Text>
          <Box position={'relative'}>
            <Box
              h='22px'
              bg='blue.200'
              top={'-20px'}
              right={'2px'}
              width={'74px'}
              borderRadius={10}
              position={'absolute'}
            >
              <Text
                sx={{ wordWrap: 'normal' }}
                fontSize={10}
                textAlign='center'
                pt={1}
                color={'blue.800'}
              >
                {ticket.priority}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Ticket
