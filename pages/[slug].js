// pages/[slug].js
import Head from "next/head";
import Image from 'next/image';
import Header from "/components/Header";
import Contact from "/components/Contact";
import ProjectCard from "/components/ProjectCard";
import {projects} from '/data/projectData';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Project({ project }) {
    const router = useRouter();

    return (
      <div className="main single" key={router.asPath}>
        <Head>
        <title>{`${project.title} ― Andrey Macedo`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

            <Header/>

            <section id="landing">
                <h4 >{
                    project.title
                }</h4>
                <h1 >{
                    project.subtitle
                }</h1>
            </section>

            <Image className="cover" 
                src={
                    project.coverImgSrc
                }
                alt="Project cover image"
                width={1920}
                height={1080}
                blurDataURL={
                    project.coverImgSrc
                }
                placeholder="blur"/>

            <section id="project-content">
                {
                project.blocks.map((block, index) => {
                    if (block.type === "text") {
                        return <p key={index} data-aos="example-anim3">
                            {
                            block.content
                        }</p>;
                    } else if (block.type === "image") {
                        return <Image key={index}
                            src={
                                block.src
                            }
                            alt="Project image"
                            width={1280}
                            height={800}
                            blurDataURL={
                                project.coverImgSrc
                            }
                            placeholder="blur"
                            data-aos="example-anim3"/>;
                    } else {
                        return null; // or handle other block types as needed
                    }
                })
            } </section>

            <Contact/>

            <section id="work">
                {
                projects.map((proj, index) => (
                    <ProjectCard key={index}
                        {...proj}/>
                ))
            } </section>

            {/*
            <section id="work">
            {projects.filter(proj => proj.href !== project.href).map((proj, index) => (
                <ProjectCard key={index} {...proj} />
            ))}
            </section>*/} 
      </div>
    )
}

export async function getStaticPaths() {
    const paths = projects.map(project => ({
        params: {
            slug: project.href.replace("/", "")
        }
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const project = projects.find(p => p.href === `/${
        params.slug
    }`);

    return {props: {
            project
        }};
}
