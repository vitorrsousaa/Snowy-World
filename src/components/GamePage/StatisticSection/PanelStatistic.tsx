import { Flex, VStack, Text, Box, Icon, HStack } from "@chakra-ui/react"

import { FaUsers } from 'react-icons/fa'
import { BsArrowLeftRight } from 'react-icons/bs'
import { GiWarPick } from 'react-icons/gi'

import { IoLogoUsd } from 'react-icons/io'
import { StatisticsGame } from "./StatisticsGame"
import { TitleStatisticSection } from "./TitleStatisticSection"

export const PanelStatistic = () => {
    return(
        <Flex
            direction='row'
            h='70vh'
            gap={8}
            w='80vw'
            m='2rem auto'
            align='flex-start'
        >
            <VStack
                bg='blue.700'
                gap={6}
                width='55vw'
                padding={6}
                borderRadius='xl'
                align='left'
                
            >
                <TitleStatisticSection title='snow game statistics' />
            
                <StatisticsGame 
                    title='247.956 PLAYERS' 
                    icon={<Icon as={FaUsers} />} 
                />

                <StatisticsGame
                    title='247.956 MINERATORS'
                    icon={<Icon as={GiWarPick} />}
                />

                <StatisticsGame
                    title='247.956 IN-GAME TRANSACTIONS'
                    icon={<Icon as={BsArrowLeftRight} />}
                />

                <StatisticsGame
                    title='247.956 USD GAS FEES SAVES'
                    icon={<Icon as={IoLogoUsd} />}
                />
                
            </VStack>

            <VStack 
                bg='blue.700'
                gap={6}
                width='25vw'
                padding={6}
                borderRadius='xl' 
                align='left'
            >
                <TitleStatisticSection title='WELCOME TO SNOWY WORLD !' />

                <Text color='white.900'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it.
                </Text>
            </VStack>
            
        </Flex>
    )
}