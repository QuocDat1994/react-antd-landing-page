import Layout, { Content, Footer } from 'antd/lib/layout/layout';

import { AppHeader } from './components/AppHeader/AppHeader';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';

import './App.less';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Home />
        <About />
        <Services />
      </Content>
      <Footer>Fotter</Footer>
    </Layout>
  );
}

export default App;
