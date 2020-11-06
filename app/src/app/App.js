import 'antd/dist/antd.css';
import { Avatar, Button, Layout, Divider, PageHeader } from 'antd';
import Title from 'antd/lib/typography/Title';
import Converter from '../containers/converter/Converter';
import Statistics from '../containers/statistics/Statistics';
const { Header, Content, Footer } = Layout;

export default function App () {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <PageHeader title="CURRENCY CONVERTER"/> 
      <Content style={{ display: "flex", flexDirection: "column", minHeight: 500 }}>
        <Converter/>
        <Divider></Divider>
        <Statistics/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>A simple currency converter app developed by Görkem Şahin.</Footer>
    </Layout>
  );
}