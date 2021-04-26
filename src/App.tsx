import styles from './App.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import LayoutContent from './features/LayoutContent/LayoutContent';
import LayoutHeader from './features/LayoutHeader/LayoutHeader';
import LayoutFooter from './features/LayoutFooter/LayoutFooter';

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <LayoutHeader />
        <LayoutContent />
        <LayoutFooter />
      </Layout>
    </div>
  );
}

export default App;