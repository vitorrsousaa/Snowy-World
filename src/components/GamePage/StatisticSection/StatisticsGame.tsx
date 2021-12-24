import { Box, HStack } from "@chakra-ui/react"
import { ReactNode } from "react"

interface StatisticsGameProps {
    title: string;
    icon: ReactNode;
}

export const StatisticsGame = ({ title, icon }: StatisticsGameProps) => {
    return(
        <HStack
            align='center'
            width='100%'
            bg='blue.150'
            padding='0.5rem 1rem'
            borderRadius='xl'
            color='blue.700'
        >
            {icon}
            <Box textStyle='h1'> {title} </Box>
                    
        </HStack>
    )
}