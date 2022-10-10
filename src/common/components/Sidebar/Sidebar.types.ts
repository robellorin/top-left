import { BoxProps, FlexProps } from '@chakra-ui/react'
import { ReactText } from 'react'
import { IconType } from 'react-icons'

export interface SidebarProps extends BoxProps {
  onClose: () => void
}

export interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}

export interface LinkItemProps {
  name: string
  icon: IconType
}
