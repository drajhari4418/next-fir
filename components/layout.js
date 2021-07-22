import Navbar from '../components/navbar'
import Hero from '../components/hero'
export default function Layout({children}) {
  return (
    <>
    <Hero />
    <Navbar />
    <main>
      {children}
      </main>
      </>
  )
}
