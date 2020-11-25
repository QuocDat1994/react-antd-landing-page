import Layout, { Content } from 'antd/lib/layout/layout';

import { AppHeader } from './components/AppHeader/AppHeader';
import { Home } from './containers/Home/Home';
import { About } from './containers/About/About';
import { BusinessPlan } from './containers/BusinessPlan/BusinessPlan';
import { Services } from './containers/Services/Services';
import { Showcase } from './containers/Showcase/Showcase';
import { Pricing } from './containers/Pricing/Pricing';
import { Testimonial } from './containers/Testimonial/Testimonial';
import { Team } from './containers/Team/Team';
import { Blog } from './containers/Blog/Blog';
import { Contact } from './containers/Contact/Contact';
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
