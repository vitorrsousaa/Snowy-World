import Head from 'next/head'
import { Header } from '../components/HomePage/Header'
import { SectionGameplay } from '../components/HomePage/Sections/SectionGameplay/SectionGameplay'
import { SectionShop } from '../components/HomePage/Sections/SectionShop/SectionNFT'
import { SectionWelcome } from '../components/HomePage/Sections/SectionWelcome/SectionWelcome'
import { Footer } from '../components/HomePage/Footer/Footer'

import { useBreakpointValue } from '@chakra-ui/react'


export default function Home() {

  const wideVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <>
      <Head>
        <title>Snowy World</title>    
      </Head>

      <Header wideVersion={wideVersion}/>

      <SectionWelcome wideVersion={wideVersion} />   

      <SectionGameplay wideVersion={wideVersion} />

      <SectionShop wideVersion={wideVersion} />

      <Footer />

    </>
  )
}
