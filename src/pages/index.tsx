import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Insights } from "@/components/home/Insights";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>StrataXM | Strategic Solutions for Complex Challenges</title>
        <meta name="description" content="StrataXM helps organizations navigate complexity and drive meaningful transformation through innovative strategies and solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Hero />
        <Services />
        <Insights />
        <CTA />
      </Layout>
    </>
  );
}