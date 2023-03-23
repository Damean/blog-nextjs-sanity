import HomeHeroSection from 'components/HomeHeroSection'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'

interface PageProps {
  posts: Post[]
  settings: Settings
}

export default function Page(props: PageProps) {
  const { posts, settings } = props

  return <HomeHeroSection />
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])

  return {
    props: {
      posts,
      settings
    },
  }
}
