import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout/Layout';
import Hero from './components/sections/Hero/Hero';

const About = lazy(() => import('./components/sections/About/About'));
const Skills = lazy(() => import('./components/sections/Skills/Skills'));
const Projects = lazy(() => import('./components/sections/Projects/Projects'));
const Experience = lazy(() => import('./components/sections/Experience/Experience'));
const Contact = lazy(() => import('./components/sections/Contact/Contact'));

const SectionLoader = () => (
  <div className="section-loader" aria-live="polite">
    Loading...
  </div>
);

function App() {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </Layout>
  );
}

export default App;
