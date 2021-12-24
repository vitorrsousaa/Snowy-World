import { Box, Button, Flex, HStack, Icon, Spacer, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

import { FaGamepad } from 'react-icons/fa'
import { RiFilePaperFill, RiUserReceivedFill } from 'react-icons/ri'
import { ButtonHome } from "./ButtonHome";
import { WideVersionButton } from "./WideVersionButton";

interface HeaderProps {
    wideVersion: boolean;
}

export function Header( {wideVersion}: HeaderProps ) {
    return(     
        <Flex
            bg='blue.700'
            align='center'
            justify='center'
            width='100%'  
            direction='column' 
            gap={8}                       
        >
            <Logo />

            <Spacer />
            
            <HStack spacing='18px' mb='3rem' >

                    {
                        wideVersion ? (
                            <>
                                <WideVersionButton icon={<FaGamepad size={30}/>} href='/play' /> 
                                <WideVersionButton icon={<RiFilePaperFill size={30}/>} href='/play' /> 
                                <WideVersionButton icon={<RiUserReceivedFill size={30}/>} href='/play' /> 
                            </>
                        ) : (
                            <>
                                <ButtonHome title='PLAY GAME !' icon={<FaGamepad />} href='play'/>
                                <ButtonHome title='WHITEPAPER' icon={<RiFilePaperFill />} href='play' />
                                <ButtonHome title='COMMUNITY' icon={<RiUserReceivedFill />} href='play' />
                            </>
                        )
                    }
                
             </HStack>
        </Flex>
    )
}