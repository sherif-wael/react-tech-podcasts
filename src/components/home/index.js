import React from "react";
import Feed from "./feed";
import Intro from "./intro";
import Layout from "../layout/layout";

export default function Home(){
    return (
        <Layout>
            <Intro />
            <Feed />
        </Layout>
    )
}