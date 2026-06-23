import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
