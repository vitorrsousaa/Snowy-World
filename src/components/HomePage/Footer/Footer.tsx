import { Flex, Text } from "@chakra-ui/react"

export const Footer = () => {
    
    return(
        <Flex
            as='footer'
            m='9rem 0'
        >
            <Text>
                    Responsitivy: <br />
                    1 position: 300px - 480px <br />
                    2 position: 481px - 767px <br />
                    3 position: 768px - 990px <br />
                    4 position: 992px - 1280px <br />
                    5 position: 1281px - 1535px <br />
                    6 position: 1536px <br />

            </Text>

            <Text> Adicionar a configuração do tema no arquivo theme</Text>
            <Text>Definir a propriedade istruncated</Text>
            <Text>Definir a propriedade number of lines</Text>
        </Flex>
    )
}