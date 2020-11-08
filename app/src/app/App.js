import 'antd/dist/antd.css';
import { Layout, Divider, PageHeader } from 'antd';
import Converter from '../containers/converter/Converter';
import Statistics from '../containers/statistics/Statistics';
import styles from './styles';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Title from 'antd/lib/typography/Title';
import { fetchSymbolsAction } from '../appState/symbols/actions';
const { Content, Footer } = Layout;

export default function App () {

  const dispatch = useDispatch();

  // This will allow me to refresh statistics everytime a new conversion is made.
  const [refresh, setRefresh] = useState(); 
  const [error, setError] = useState(false);

  const onFail = useCallback(() => setError(true), []);

  useEffect(()=> {
    dispatch(fetchSymbolsAction(onFail));
  }, [dispatch, onFail]);

  return (
    <Layout style={ styles.layout }>
      <PageHeader title="CURRENCY CONVERTER"/>
      { error ?
        <div style={ styles.errorContainer }>
          <Title level={ 3 }>Please check your internet connection.</Title>
        </div>
        :
        <Content style={ styles.content }>
          <Converter onFail={ onFail } setRefresh={ setRefresh} />
          <Divider></Divider>
          <Statistics refresh={ refresh }/>
        </Content>
      }
      <Footer style={ styles.footer }>A simple currency converter app developed by Görkem Şahin.</Footer>
    </Layout>
  );
}