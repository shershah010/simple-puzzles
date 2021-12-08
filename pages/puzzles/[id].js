import Image from 'next/image'

import Layout from '../../components/layout'
import Form from '../../components/form'

import styles from './[id].module.css'

import { getAllPuzzleIds, getPuzzleData } from '../../lib/puzzles'

export default function Puzzle({ puzzleData }) {
  return (
    <Layout>
      <h3 className={styles.center}>{ puzzleData.title }</h3>
      <div className={styles.center}>
        <Image 
            src={ "/images/" + puzzleData.image + ".bmp" }
            alt={ puzzleData.alt }
            title={ puzzleData.alt }
            height={500}
            width={500}
          />
      </div>
      <p className={styles.center}>{ puzzleData.hint }</p>
      <Form hashedUsername={ puzzleData.username } hashedPassword={ puzzleData.password } target={ puzzleData.target } ></Form>
    </Layout>
  )
  
}

export async function getStaticPaths() {
  const paths = getAllPuzzleIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const puzzleData = getPuzzleData(params.id)
  return {
    props: {
      puzzleData
    }
  }
}


