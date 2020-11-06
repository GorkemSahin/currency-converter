import 'antd/dist/antd.css';
import { Layout, Divider, PageHeader } from 'antd';
import Converter from '../containers/converter/Converter';
import Statistics from '../containers/statistics/Statistics';
import styles from './styles';
const { Content, Footer } = Layout;

export default function App () {

  return (
    <Layout style={ styles.layout }>
      <PageHeader title="CURRENCY CONVERTER"/> 
      <Content style={ styles.content }>
        <Converter/>
        <Divider></Divider>
        <Statistics/>
      </Content>
      <Footer style={ styles.footer }>A simple currency converter app developed by Görkem Şahin.</Footer>
    </Layout>
  );
}