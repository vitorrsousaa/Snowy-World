import { Button, Flex } from "@chakra-ui/react"
import { Logo } from "../../HomePage/Header/Logo"
import { ButtonLogin } from "./ButtonLogin"

export const HeaderStatistic = () => {
    return(
        <Flex
            bg='blue.700'
            h='6rem'
        >
            <Flex
                align='center'
                justify='space-between'
                w='80vw'
                m='0 auto'
            >
                <Logo />

                <ButtonLogin />
                
            </Flex>
        </Flex>
    )
}