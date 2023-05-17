import Layout from '@/components/Layout'
import Hero from '@/components/hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title> Unsplash: Beautiful Free Images & Pictures </title>
        <meta
          property='og:title'
          content='Unsplash: Beautiful Free Images & Pictures '
          key='title'
        />
        <meta
          property='og:description'
          content='Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.'
        />
      </Head>
      <Layout>
        <main className='flex min-h-screen flex-col items-center justify-between'>
          <Hero />
        </main>
      </Layout>
    </>
  )
}
