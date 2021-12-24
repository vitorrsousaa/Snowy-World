import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";

interface ButtonHomeProps {
    title: string;
    icon: ReactElement;
    href: string;
}

export function ButtonHome( { title, icon, href }: ButtonHomeProps ) {
    return(
        <Button 
            variant='snowed' 
            leftIcon={icon}
            h='20'
        >
            <Link href={href} passHref>
                <a>{title}</a>
            </Link>
        </Button>
    )
}