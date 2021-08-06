import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FormCrypto from './src/components/FormCrypto/FormCrypto';
import Header from './src/components/Header/Header';
import Quote from './src/components/Quote/Quote';

const App = () => {
  const [result, setResult] = useState({});
  const [charging, setCharging] = useState(false);
  const handlerSubmitQuote = async (currency: string, cryptomoneda: string) => {
    setCharging(true);
    // console.log('Ejecutando cotizacion', currency, cryptomoneda);
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${currency}`;
    const result = await axios.get(url);
    setTimeout(() => {
      setResult(result.data.DISPLAY[cryptomoneda][currency]);
      setCharging(false);
    }, 1500);
  };

  return (
    <ScrollView>
      <Header />
      <Image
        style={styles.img}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.container}>
        <FormCrypto handlerSubmitQuote={handlerSubmitQuote} />
      </View>
      <View style={{marginTop: 40}}>
        {charging ? (
          <ActivityIndicator size="large" color="#5E49E2" />
        ) : (
          <Quote data={result} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2.5%',
  },
  img: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});

export default App;
