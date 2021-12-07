import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Puzzles</title>
      </Head>
      <div> 
        <h3>Here are some simple puzzles</h3>
        <h3>You are going to need to enlist a master <a href="https://gchq.github.io/CyberChef" target="_blank" rel="noopener noreferrer">chef</a> to complete these puzzles</h3>
        <h3>When you are ready hit start</h3>
        <p>Note: All usernames and password are in English, lowercased, and alphabetical characters without spaces.</p>
        <Link href="puzzles/puzzle-one"><a>START</a></Link>
      </div>
    </>
  )
}
