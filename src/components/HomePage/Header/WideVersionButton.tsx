import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface WideVersionButtonProps {
    icon: ReactNode;
    href: string;
}

export function WideVersionButton({icon, href}: WideVersionButtonProps) {
    return(
        <Box 
            bg='blue.800' 
            color='#caf0f8' 
            p={5} 
            borderRadius='xl' 
            cursor='pointer'
            _hover={{bg:'blue.500', color:'white', transition: 'all 0.7s'}}
        >
            <Link href={href} passHref>
                {icon}
            </Link>
        </Box>
    )
}