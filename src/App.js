import Layout, { Content, Footer } from 'antd/lib/layout/layout';

import { AppHeader } from './components/AppHeader/AppHeader';
import { Home } from './components/Home/Home';

import './App.less';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Home />
      </Content>
      <Footer>Fotter</Footer>
    </Layout>
  );
}

export default App;
