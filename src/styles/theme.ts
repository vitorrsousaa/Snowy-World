import { extendTheme } from '@chakra-ui/react'
import { FaBluetooth } from 'react-icons/fa'

export const theme = extendTheme({
    colors: {
        blue: {
            700: '#3a506b',
            800: '#1c2541',
            150: '#b6ccfe',
        },
        white: {
            900: '#e2eafc',
            
        },
    },
    components: {
        Button: {
            variants: {
                'snowed': {
                    bg: 'blue.800',
                    color: 'white.900',
                    
                    _hover: {
                        bg: 'blue.500',
                        transition: 'all 0.7s',
                        color: 'white'
                    }

                },
                'snowed-slow': {
                    bg: 'blue.700',
                    color: '#caf0f8',
                    
                    _hover: {
                        bg: 'blue.500',
                        transition: 'all 0.7s',
                        color: 'white'
                    }

                }
            },
        },
    },
    styles: {
        global: {
            body:{
                bg: '#e2eafc',               
                color: '#3a506b',
            }
        },
    },
    fonts: {
        body: 'Balsamiq Sans',
        h1: 'Staatliches',
        h2: 'Bangers',    
    },
    textStyles:{
        h1:{
            fontWeight: 'bold',
            letterSpacing: '5px',
        },
        strong:{
            fontWeight: 'bold'
        },

    }
})
