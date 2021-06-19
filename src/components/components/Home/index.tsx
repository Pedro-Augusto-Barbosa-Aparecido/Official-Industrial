import React from "react";
import DownHeader from "../../DownHeader";
import Header from "../../Header";
import HomePage from "../../HomePage";
import UnderHeader from "../../UnderHeader";

export default function Home () {
    return (
        <>
            <Header />
            <UnderHeader />
            <HomePage />
            <DownHeader />
        </>
    )
}