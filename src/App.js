import Layout, { Content, Footer } from 'antd/lib/layout/layout';

import { AppHeader } from './components/AppHeader/AppHeader';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Showcase } from './components/Showcase/Showcase';
import { Pricing } from './components/Pricing/Pricing';
import { Testimonial } from './components/Testimonial/Testimonial';

import './App.less';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Home />
        <About />
        <Services />
        <Showcase />
        <Pricing />
        <Testimonial />
      </Content>
      <Footer>Fotter</Footer>
    </Layout>
  );
}

export default App;
