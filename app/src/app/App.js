import 'antd/dist/antd.css';
import { Layout, Divider, PageHeader, Button, Space } from 'antd';
import Converter from '../containers/converter/Converter';
import Statistics from '../containers/statistics/Statistics';
import styles from './styles';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Title from 'antd/lib/typography/Title';
import { fetchSymbolsAction } from '../appState/symbols/actions';
const { Content, Footer } = Layout;

export default function App () {

  const dispatch = useDispatch();

  // This will allow me to refresh statistics everytime a new conversion is made.
  const [refresh, setRefresh] = useState();
  const [error, setError] = useState(false);

  useEffect(()=> {
    dispatch(fetchSymbolsAction(setError));
  }, [dispatch, setError]);

  return (
    <Layout style={ styles.layout }>
      <PageHeader title="CURRENCY CONVERTER"/>
      { error ?
        <div style={ styles.errorContainer }>
         <Space direction="vertical" align="center"> 
            <Title level={ 3 }>{ error.message || "Please check your internet connection."}</Title>
            <Button onClick={ () => setError(false) }>RETRY</Button>
          </Space>
        </div>
        :
        <Content style={ styles.content }>
          <Converter onFail={ setError } setRefresh={ setRefresh} />
          <Divider></Divider>
          <Statistics onFail={ setError } refresh={ refresh }/>
        </Content>
      }
      <Footer style={ styles.footer }>A simple currency converter app developed by Görkem Şahin.</Footer>
    </Layout>
  );
}