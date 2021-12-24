import { Text } from "@chakra-ui/react"

interface TitleStatisticSectionProps {
    title: string;
}

export function TitleStatisticSection ( { title }: TitleStatisticSectionProps ) {
    return (
        <Text 
            fontFamily='Staatliches'
            color='blue.150'
            letterSpacing='1px'
            fontSize='3xl'
        >
             {title}       
        </Text>
    )
}