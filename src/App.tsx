import { Element } from 'react-scroll';

import { Home } from './pages/home';
import { About } from './pages/about';
import { Mechanics } from './pages/mechanics';
import { Feedbacks } from './pages/feedbacks';
import { Contact } from './pages/contact';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div>
      <Element name='homeSection' >
        <Home />
      </Element>

      <Element name='aboutSection' >
        <About />
      </Element>

      <Element name='mechanicsSection' >
        <Mechanics />
      </Element>

      <Element name="feedbacksSection" >
        <Feedbacks />
      </Element>

      <Element name='contactSection' >
        <Contact />
      </Element>

      <Footer />
    </div>
  )
}