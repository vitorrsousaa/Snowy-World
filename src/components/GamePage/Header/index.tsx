import { Avatar, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { Logo } from "../../HomePage/Header/Logo"

export const HeaderGame = () => {
    return(
        <Flex
            bg='#3a506b'
            h='6rem'
        >
            <Flex
                align='center'
                justify='space-between'
                w='80vw'
                m='0 auto'
            >

                <HStack color='white.900'>
                    <Logo />
                    <Spacer />
                        <Link href="/play/minerators" passHref>
                            <a>Minerators</a>
                        </Link>
                    <a href="">Staking</a>
                    <a href="">Marketplace</a>
                    <a href="">Minerators Workshop</a>
                </HStack>

                <HStack>
                    <VStack spacing={1} color='white'>
                        <Text>Name of user</Text>
                        <Text>25.040,03 coins</Text>
                    </VStack>
                    <Avatar />
                </HStack>
                
            </Flex>
        </Flex>
    )
}