import { Flex, Image, Text } from "@chakra-ui/react"
import { Title } from "../../Title"


interface SectionWelcomeProps {
    wideVersion: boolean
}

export const SectionWelcome = ({ wideVersion }: SectionWelcomeProps) => {

    return(
        <Flex
            direction='column'
            align='center'
            m='9rem 0'
        >
            
            <Title title='WELCOME TO SNOWY WORLD !' size={[ '1.6rem', '2.8rem', '4.5rem', '5rem', '6rem' ]} />

            <Flex
               direction={['column' , 'column', 'column', 'row']} 
               maxWidth='60vw'
               justify='center'
               align='center'
               m='5rem 0'
            >
                <Image 
                    src='https://picsum.photos/300/300?grayscale'
                    alt='image SnowGame'
                    mr={wideVersion ? '0' : '2rem'}
                    mb={wideVersion ? '3rem' : '0'}
                />

                <Text
                    textAlign={wideVersion ? 'center' : 'left'}
                >
                    
                    This Section: <br />
                    -Invent a story for the game there <br />
                    -Put an imagem of the game on the side <br />
                    Up Section: <br />
                    -Add animations to the buttons at the top of the page using the framer motion library . <br />
                    
                    -Add modal for community to chakraui. < br />
                    GamePlay Section: <br />
                    -Comment about the game and explain to how to game in the section GAMEPLAY. <br />
                    -This section contain a Snow Racing, Buy / Sell Snowboards / Upgrade your Snowboards <br />
                    NFT Snowboards: <br />
                    -Show the snowboards that will be sold below <br />
                    -Create section shower the snowboards that be sold, and explain about NFT Snows, redirect to marketplace <br />
                </Text>
                
            </Flex>

        </Flex>
    )
}