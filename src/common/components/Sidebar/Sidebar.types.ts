import { BoxProps, FlexProps } from '@chakra-ui/react'
import { Dispatch, ReactText, SetStateAction } from 'react'
import { IconType } from 'react-icons'

export interface SidebarProps extends BoxProps {
  onClose: () => void
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}

export interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
  isSelected: boolean
  setSelected: Dispatch<SetStateAction<number>>
  index: number
}

export interface LinkItemProps {
  name: string
  icon: IconType
}
