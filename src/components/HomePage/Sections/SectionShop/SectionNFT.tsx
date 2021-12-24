import { Box, Flex, Image, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import { Title } from "../../Title"
import { NameStyle } from "./NameStyle"

interface SectionShopProps {
    wideVersion: boolean;
}


export const SectionShop = ( {wideVersion}: SectionShopProps ) => {
    return (
        <Flex
            direction='column'
            align='center'
            
        >
            <Title title='SHOP SECTION' size={[ '2.5rem', '2.8rem', '4.5rem', '5rem', '7rem' ]} />

            <Text textAlign='center'>
                Earn yout NFTs item by playing the game and sell it to make money.
            </Text>

            <Flex
                direction={ wideVersion ? 'column' : 'row'}
                
                gap={8}
                m='8rem auto'
            >
                <Flex
                    align='center'
                    direction='column'
                    gap={6}
                >
                    <Image 
                        src='https://picsum.photos/250/250?grayscale'
                        alt='image SnowGame' 
                    />
                    <Text>Common</Text>
                    <NameStyle name="The name of snow" />
                </Flex>

                <Flex
                    align='center'
                    direction='column'
                    gap={6}
                >
                    <Image 
                        src='https://picsum.photos/250/249?grayscale'
                        alt='image SnowGame' 
                    />
                    <Text>Rare</Text>
                    <NameStyle name="The name of snow" />
                </Flex>

                <Flex
                    align='center'
                    direction='column'
                    gap={6}
                >
                    <Image 
                        src='https://picsum.photos/250/248?grayscale'
                        alt='image SnowGame' 
                    />
                    <Text>Classic</Text>
                    <NameStyle name="The name of snow" />
                </Flex>
                <Flex
                    align='center'
                    direction='column'
                    gap={6}
                >
                    <Image 
                        src='https://picsum.photos/250/247?grayscale'
                        alt='image SnowGame' 
                    />
                    <Text>Common</Text>
                    <NameStyle name="The name of snow" />
                </Flex>
        
            </Flex>

            <Link href='/play' passHref>
                <Button
                    variant='snowed-slow'
                >
                    <a>GO TO THE MARKETPLACE</a>
                </Button>
            </Link>

        </Flex>
    )
}