import Head from "next/head";
import { HeaderGame } from "../../components/GamePage/Header";
import { MineratorsPanel } from "../../components/GamePage/MineratorsPanel";

export default function MineratorsGame() {
    return(
        <>
            <Head>
                <title>Snow Game | Minerators</title>    
            </Head>

            <HeaderGame />

            <MineratorsPanel />
        
        </>
    )
}