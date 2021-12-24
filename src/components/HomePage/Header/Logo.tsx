import { HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsSnow } from 'react-icons/bs'

export function Logo() {
    const { asPath } = useRouter()
    
    const isPlaying = asPath.includes('/play')

    return(
        <Link href='/' passHref>
            <HStack
                spacing='10px'
                color='blue.150'
                cursor='pointer'
            >
                <BsSnow fontSize='50' />

                <Text 
                    fontWeight='bold'
                    letterSpacing='2px'
                    fontSize={ isPlaying ? '2rem' : [ '1.6rem', '2.8rem', '4.5rem', '5rem', '7rem' ]} 
                    fontFamily='Bangers'
                    textShadow='0.5px 0.5px #0b132b'
                >               
                    <a>SNOWY WORLD</a>
                </Text>
            </HStack>
        </Link>
    )
}