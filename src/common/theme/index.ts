import { extendTheme } from '@chakra-ui/react'
import { COLORS } from 'src/common/theme/styles/colors'

const overrides = {
  colors: COLORS
}

const customTheme = extendTheme(overrides)
export default customTheme
