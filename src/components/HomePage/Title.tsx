import { Text } from "@chakra-ui/react"

interface TitleProps {
    title: string;
    size: string[];
}

export const Title = ( { title, size }: TitleProps ) => {

    return(
        <Text
            fontSize={size}
            fontFamily='Bangers'
            textShadow='1px 1px white'
            letterSpacing='1px'
            textAlign='center'
            color='cyan.800'
        >
            {title}
        </Text>
    )
}