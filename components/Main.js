import React from "react";

export default function Main(props) {
    const { children } = props;
    return (
        <main className="container mx-auto w-[1000px] h-[600px]">
            {children}
        </main>
    )
}
