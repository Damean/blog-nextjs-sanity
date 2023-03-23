import { Settings } from "lib/sanity.queries";
import Head from "next/head";
import * as demo from "lib/demo.data"
import { toPlainText } from "@portabletext/react";


interface HeadWrapperProps {
    settings: Settings
}

export default function HeadWrapper({ settings } : HeadWrapperProps) {
    const { 
        title = demo.title,
        description = demo.description
    } = settings

  return (
    <Head>
        <title>{title}</title>
        <meta
            key="description"
            name="description"
            content={toPlainText(description)}
        />
    </Head>
  )
}
