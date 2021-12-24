import { Flex, Text } from "@chakra-ui/react"

interface NameStyleProps {
    name: string;
}

export const NameStyle = ( {name}: NameStyleProps ) => {
    return(
        <Flex
            bg='cyan.500'
            borderRadius='lg'
            color='white'
            align='center'
            justify='center'
            padding='0.5rem 3rem'
            minWidth='170px'
        >
            <Text
                fontFamily='Bangers'
                letterSpacing='2px'
                
            >
                {name} 
            </Text>
        </Flex>
    )
}