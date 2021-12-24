import { Flex } from "@chakra-ui/react"
import { Title } from "../../HomePage/Title"
import { MineratorCard } from "./MineratorCard"

export const MineratorsPanel = () => {
    return(
        <Flex
            padding={6}
            direction='column'
        >
            <Flex align='left' marginBottom={4}>
                <Title title='your minerators' size={['3xl']} />
            </Flex>

            <MineratorCard />
            
        
        
        
        </Flex>
    )
}