import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { Title } from "../../Title"

interface SectionGameplayProps {
    wideVersion: boolean;
}

export const SectionGameplay = ( { wideVersion }: SectionGameplayProps ) => {

    return(
        <Flex
            direction='column'
            align='center'
            justify='center'
            mb='4rem'
        >

            <Title title='GAMEPLAY' size={[ '2.5rem', '2.8rem', '4.5rem', '5rem', '7rem' ]} />

            <Grid
                w='80vw'
                templateRows={ wideVersion ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)' }
                templateColumns= { wideVersion ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'}
                gap={6}
                alignItems='center'
                m={ wideVersion ? '6rem auto' : '9rem auto'}
            >
                <GridItem
                    rowSpan={1}
                    colSpan={1}
                    paddingLeft={ wideVersion ? '0' : '1rem'}
                    paddingBottom={ wideVersion ? '0' : '6rem'}
                >
                    <Title 
                        title='MINING THE WORLD' 
                        size={['2xl','4xl']} 
                    />

                    <Text
                        margin='0.7rem 0'
                        textAlign={ wideVersion ? 'center' : 'left'}
                        fontSize={['1rem']}
                    >
                        Traduza texto e documentos de forma instantânea. 
                        Traduções precisas para usuários únicos ou equipes. 
                        Milhões de pessoas traduzem com o DeepL todos os dias.
                    </Text>

                </GridItem>

                <GridItem
                    rowSpan={1}
                    colSpan={1}
                    paddingTop={ wideVersion ? '0' : '9rem'}
                >
                    <Title 
                        title='BUY / SELL MINERATORS' 
                        size={['2xl','4xl']}
                    />
                
                    <Text
                        margin='0.7rem 0'
                        textAlign={ wideVersion ? 'center' : 'left'}
                        fontSize={['1rem']}
                    >
                        Traduza texto e documentos de forma instantânea. 
                        Traduções precisas para usuários únicos ou equipes. 
                        Milhões de pessoas traduzem com o DeepL todos os dias.
                    </Text>

                </GridItem>

                <GridItem
                    rowSpan={ wideVersion ? 1 : 2}
                    colSpan={ wideVersion ? 1 : 2}
                    alignSelf='center'
                    m='0 auto'
                >
                    <Image 
                        src='https://picsum.photos/400/500?grayscale'
                        alt='image SnowGame' 
                    />
                </GridItem>
                
                <GridItem
                    rowSpan={1}
                    colSpan={1}
                    paddingRight={ wideVersion ? '0' : '2rem'}
                >
                    <Title 
                        title='UPGRADE YOUR MINERATORS' 
                        size={['2xl','4xl']} 
                    />
                    
                    <Text
                        margin='0.7rem 0'
                        textAlign={ wideVersion ? 'center' : 'left'}
                        fontSize={['1rem']}
                    >
                        Traduza texto e documentos de forma instantânea. 
                        Traduções precisas para usuários únicos ou equipes. 
                        Milhões de pessoas traduzem com o DeepL todos os dias.
                    </Text>
                </GridItem>

            </Grid>
        </Flex>
    )
}