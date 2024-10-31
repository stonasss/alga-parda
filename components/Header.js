'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../public/alga-parda.png"

export default function Header() {
    const router = useRouter();

    return (
    <div className="fixed w-full h-48">
        <header className="bg-algae">
            <Image
                alt="alga parda logo"
                src={logo}
                className="cursor-pointer"
                style={{
                    maxWidth: '20%',
                    height: 'auto',
                    margin: 'auto',
                    paddingTop: '20px'
                }}
                onClick={() => router.push('/')}
            />
            <div className="flex pb-4 justify-between w-1/2 m-auto pt-2">
                <button 
                    type="button"
                    onClick={() => router.push('/sobre')}
                >sobre</button>
                <button>assine nosso newsletter</button>
                <button 
                    type="button"
                    onClick={() => router.push('/contato')}
                >contato</button>
            </div>
        </header>
    </div>
    )
}