import Layout from './components/layout/Layout/Layout';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from './components/sections';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;
