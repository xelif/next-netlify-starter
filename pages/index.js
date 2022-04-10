import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Unik Trapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Her kommer Unik Trapp" />
      </main>
    </div>
  )
}
