import Head from "next/head";
import Link from "next/link";
import Header from "/components/Header";
import Contact from "/components/Contact";
import ProjectCard from "/components/ProjectCard";
import About from "/components/About";

export default function Home() {
    return (
        <div style={
            {background: "#050505"}
        }>
            <Head>
                <title>Document</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <Header/>

            <section id="landing">
                <h1>Hi, I'm a designer based in São Paulo.</h1>
            </section>

            <section id="work">
                <ProjectCard
                    href="/lg-magenta"
                    title="LG Magenta"
                    subtitle="Connecting architects, designers and engineers."
                    imgSrc="/img/lg-magenta-cover.png"
                />

                <ProjectCard
                    href="/tc"
                    title="TC"
                    subtitle="Connecting architects, designers and engineers."
                    imgSrc="/img/tc-cover.png"
                />
            </section>

            <About/>

            <Contact/>

        </div>
    );
}
