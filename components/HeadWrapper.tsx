import { Settings } from "lib/sanity.queries";
import Head from "next/head";
import * as demo from "lib/demo.data"
import { toPlainText } from "@portabletext/react";
import HeadStandardMeta from "./HeadStandardMeta";


interface HeadWrapperProps {
    settings: Settings
}

export default function HeadWrapper({ settings } : HeadWrapperProps) {
    
    const { 
        title = demo.title,
        description = demo.description,
        ogImage = {}
    } = settings

    const ogImageTitle = ogImage.title || demo.ogImageTitle

  return (
    <Head>
        <title>{title}</title>
        <meta
            key="description"
            name="description"
            content={toPlainText(description)}
        />
        <meta
            property="og:image"
            content={`${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : '' }/api/og/?${new URLSearchParams({ title: ogImageTitle })}`}
        />
        <HeadStandardMeta />
    </Head>
  )
}
