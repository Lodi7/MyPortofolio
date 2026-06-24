import Navbar from '../Components/Layout/Navbar'
import Hero from '../Components/Sections/Hero'
import Particles from '../Components/Animations/Particles';
import About from '../Components/Sections/Abuot';
import Skills from '../Components/Sections/Skills';
import Projects from '../Components/Sections/Projects';
import Contact from '../Components/Sections/Contact'
import Footer from '../Components/Layout/Footer';

function Home() {
  return (
    <div className='w-full min-h-screen relative overflow-hidden'>
      <Particles
        particleColors={["#03CEFE"]}
        particleCount={1000}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation
        pixelRatio={1}
      />
      {/* Background Glow */}

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
