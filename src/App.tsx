import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Statistics } from './components/Statistics';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { AnimatedBackground } from './components/AnimatedBackground';
import { FloatingShapes } from './components/FloatingShapes';
import { ParticleField } from './components/ParticleField';
import { MeshGradient } from './components/MeshGradient';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen transition-colors duration-300 relative">
        {/* Layered background effects */}
        <MeshGradient />
        <AnimatedBackground />
        <FloatingShapes />
        <ParticleField />

        {/* Main content */}
        <div className="relative z-10">
          <ScrollProgress />
          <Navigation />
          <main className="overflow-hidden">
            <Hero />
            <About />
            <Statistics />
            <Education />
            <Skills />
            <TechStack />
            <Projects />
            <Testimonials />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </LanguageProvider>
  );
}

export { App };