import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
  },
  semanticTokens: {
    colors: {
      'bg.surface': {
        default: 'white',
        _dark: 'gray.900',
      },
      'bg.muted': {
        default: '#F4F7FA',
        _dark: 'gray.800',
      },
      'bg.emphasized': {
        default: 'gray.100',
        _dark: 'gray.700',
      },
      'text.primary': {
        default: 'gray.900',
        _dark: 'gray.50',
      },
      'text.secondary': {
        default: 'gray.700',
        _dark: 'gray.300',
      },
      'text.muted': {
        default: 'gray.600',
        _dark: 'gray.400',
      },
      'border.subtle': {
        default: 'gray.200',
        _dark: 'gray.700',
      },
      'border.emphasized': {
        default: 'gray.300',
        _dark: 'gray.600',
      },
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        fontFamily: "'Roboto', sans-serif",
      },
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.900',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      },
      a: {
        color: props.colorMode === 'dark' ? 'purple.300' : 'purple.600',
        _hover: {
          textDecoration: 'underline',
        },
      },
    }),
  },
  components: {
    Box: {
      baseStyle: {
        transition: 'background-color 0.3s ease, color 0.3s ease',
      },
    },
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.900',
      }),
    },
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
      }),
    },
    Card: {
      baseStyle: (props) => ({
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
      }),
    },
  },
})

export default theme
