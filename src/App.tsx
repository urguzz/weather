import { useState, useEffect } from 'react';
import styles from './App.less';
import { Layout } from 'antd';
import MyApi, { IWeatherData } from './api/MyApi';
import 'antd/dist/antd.css';
import LayoutContent from './components/LayoutContent/LayoutContent';
import LayoutHeader from './components/LayoutHeader/LayoutHeader';
import LayoutFooter from './components/LayoutFooter/LayoutFooter';

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
        <LayoutHeader
          onCityChange={handleCityChange}
          isLoading={isLoading} />
        <LayoutContent
          data={data}
          city={city}
          isLoading={isLoading} />
        <LayoutFooter />
      </Layout>
    </div>
  );
}

export default App;