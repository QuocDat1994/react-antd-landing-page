import Layout, { Content } from 'antd/lib/layout/layout';

import { AppHeader } from './components/AppHeader/AppHeader';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { BusinessPlan } from './components/BusinessPlan/BusinessPlan';
import { Services } from './components/Services/Services';
import { Showcase } from './components/Showcase/Showcase';
import { Pricing } from './components/Pricing/Pricing';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Team } from './components/Team/Team';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';
import { AppFooter } from './components/AppFooter/AppFooter';

import './App.less';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Home />
        <About />
        <BusinessPlan />
        <Services />
        <Showcase />
        <Pricing />
        <Testimonial />
        <Team />
        <Blog />
        <Contact />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
