import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SWSC-MUN</title>
        <meta name="description" content="SWSC Model United Nations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <h1 className='text-4xl'>Hello World</h1>
      </main>
    </div>
  )
}
