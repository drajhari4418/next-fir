import styles from '../styles/Home.module.css'
import Title from '../components/title'

export default function Home({ data }) {
  return (
    <>
    
    <Title title="Home"/>
      <h1>Home page</h1>
        <div className={styles.container}>
      {data.map((post,i) => {
        return (
        <div key = {i}>
          <h2>{post.name}</h2>
          <h3>{post.color}</h3>
          <p>{post.year}</p>
          </div>
          )
          })}
          </div>
      </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://reqres.in/api/unknown")
const data = await res.json()
console.log(data)
return {
  props:{
    data: data.data
  }
}
}