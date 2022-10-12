import React, { ReactNode } from 'react'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  FlexProps,
  Menu,
  MenuButton,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  //   FiSettings,
  FiMenu
} from 'react-icons/fi'
import { Search2Icon } from '@chakra-ui/icons'

import { LinkItemProps, NavItemProps, SidebarProps } from './Sidebar.types'
import Logo from 'src/assets/icons/logo'

const LinkItems: Array<LinkItemProps> = [
  { name: 'Tickets', icon: FiHome },
  { name: 'Projects', icon: FiTrendingUp },
  { name: 'Sales', icon: FiCompass },
  { name: 'Activities', icon: FiStar }
]

const FooterItems: Array<LinkItemProps> = [
  { name: 'Help', icon: FiHome },
  { name: 'Settings', icon: FiTrendingUp }
]

export default function Sidebar({
  children = null,
  selected,
  setSelected
}: {
  children: ReactNode
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH='100vh' bg={useColorModeValue('white', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        selected={selected}
        setSelected={setSelected}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            selected={selected}
            setSelected={setSelected}
          />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      {children && (
        <Box
          ml={{ base: 0, md: 60 }}
          p='4'
          bg={'white'}
          overflow='auto'
          height={'92vh'}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

const SidebarContent = ({
  onClose,
  selected,
  setSelected,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('primary', 'gray.700')}
      borderRight='1px'
      borderRightColor={useColorModeValue('primary', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        gap={'41rem'}
      >
        <Box>
          {LinkItems.map((link, index: number) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              isSelected={selected === index}
              index={index}
              setSelected={setSelected}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
        <Box>
          {FooterItems.map((link, index: number) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              isSelected={selected === index + 4}
              index={index + 4}
              setSelected={setSelected}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}

const NavItem = ({
  icon,
  children,
  isSelected,
  setSelected,
  index,
  ...rest
}: NavItemProps) => {
  return (
    <Link
      href='#'
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={() => setSelected(index)}
    >
      <Flex
        align='center'
        bg={isSelected ? 'blue.600' : ''}
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        color={'white'}
        _hover={{
          bg: 'blue.400',
          color: 'white'
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height='20'
        alignItems='center'
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth='1px'
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant='outline'
          aria-label='open menu'
          icon={<FiMenu />}
        />

        <Logo />

        <HStack spacing={{ base: '0', md: '6' }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Search2Icon color='gray.600' />}
            />
            <Input type='text' placeholder='Search' size={'md'} />
          </InputGroup>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition='all 0.3s'
                _focus={{ boxShadow: 'none' }}
              >
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  {/* <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'
                >
                  <Text fontSize='sm'>Justina Clark</Text>
                  <Text fontSize='xs' color='gray.600'>
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box> */}
                </HStack>
              </MenuButton>
              {/* <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList> */}
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  )
}
