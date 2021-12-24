import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { HeaderStatistic } from "../../components/GamePage/StatisticSection/HeaderStatistic";
import { PanelStatistic } from "../../components/GamePage/StatisticSection/PanelStatistic";


export default function PreviewSection() {

    return(
        <>
            <Head>
                Snow Game | Playing
            </Head>

            <HeaderStatistic />
            
            <PanelStatistic />

            <Text>
                Só vai carregar o cabeçalho de estatisicas se o usuário estiver logado. <br />
                Se não, vamo carregar o header do game
            </Text>
        </>
    )
}