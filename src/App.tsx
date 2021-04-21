import { useState, useEffect } from 'react';
import styles from './App.less';
import InputField from './components/InputField/InputField'
import { Layout } from 'antd';
import MyApi, { IWeatherData } from './api/MyApi';
import 'antd/dist/antd.css';
import LayoutContent from './components/LayoutContent/LayoutContent';

const { Header, Footer } = Layout;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>('');
  const [data, setData] = useState<Array<IWeatherData>>([]);

  function handleCityChange(value: string) {
    setCity(value);
  }

  useEffect(() => {
    setData([]);
    if (city) {
      setIsLoading(true);
      const apis: Array<Promise<IWeatherData | null>> = [];
      MyApi.getApiList().forEach(api => apis.push(api.getWeatherByCity(city)));
      Promise.all(apis).then(resultArray => resultArray.forEach(result => {
        if (result)
          setData(oldData => [...oldData, result])
      }))
        .then(() => setIsLoading(false));
    }
  }, [city])

  return (
    <div className={styles.App}>
      <Layout>
        <Header className={styles.header}>
          <InputField
            onCityChange={handleCityChange}
            isLoading={isLoading} />
        </Header>
        <LayoutContent
          data={data}
          city={city}
          isLoading={isLoading} />
        <Footer className={styles.footer}>
          <span>2021</span>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;