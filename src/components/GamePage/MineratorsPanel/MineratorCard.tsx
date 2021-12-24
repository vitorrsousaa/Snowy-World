import { Flex, HStack, VStack, Text, Spacer, Image, Divider, Center, Grid,  Button } from "@chakra-ui/react"
import { GiBlackHandShield, GiTemporaryShield } from "react-icons/gi"
import { RiShieldStarFill, RiShieldCheckFill, RiShieldFlashFill, RiShieldUserFill } from 'react-icons/ri'
import { Title } from "../../HomePage/Title"

export const MineratorCard = () => {

    return(
        <HStack>
                <VStack
                    bg='cyan.500'
                    gap={6}
                    width='25vw'
                    padding={4}
                    borderRadius='xl' 
                    align='left'
                >
                    <HStack>
                        <Text>#154687</Text>
                        <Spacer />
                        <Text>Legend</Text>
                    </HStack>

                    <Center>
                        <Image 
                            src='https://picsum.photos/150/150?grayscale'
                            alt='minerators-image'
                        />
                    </Center>

                    <Center>
                        <Title title="master yi" size={['xl']}/> 
                    </Center>

                    <Divider orientation="horizontal"/>

                    <Grid 
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(2, 1fr)' 
                        gap={4}
                    >
                        <HStack>
                            <GiTemporaryShield />
                            <Text>Speed:</Text>
                            <Text>98</Text>
                        </HStack>
                        <HStack>
                            <GiBlackHandShield />
                            <Text>Power:</Text>
                            <Text>98</Text>
                        </HStack>
                        <HStack>
                            <RiShieldUserFill />
                            <Text>Level:</Text>
                            <Text>1</Text>
                        </HStack>
                        <HStack>
                            <RiShieldStarFill />
                            <Text>Exp:</Text>
                            <Text>4520</Text>
                        </HStack>
                        <HStack>
                            <RiShieldCheckFill />
                            <Text>Health:</Text>
                            <Text>40/40</Text>
                        </HStack>
                        <HStack>
                            <RiShieldFlashFill />
                            <Text>Energy:</Text>
                            <Text>20/20</Text>
                        </HStack>
                    </Grid>

                    <Divider orientation="horizontal"/>

                    <Center gap={4}>
                        <Button>Play</Button>
                        <Button>Rewards</Button>
                    </Center>

                    <Center>
                        <Button>Sell this minerator</Button>
                    </Center>

                </VStack>

            </HStack>
    )
}