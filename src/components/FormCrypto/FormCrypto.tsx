import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {FontFamilyEnum} from '../../utils/env';
interface MyProps {
  handlerSubmitQuote(currency: string, cryptomoneda: string): void;
}
const defaultProps = {};
const FormCrypto = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {handlerSubmitQuote} = props;

  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [cryptoCurrencys, setCryptoCurrencys] = useState([]);

  // useEffect
  useEffect(() => {
    (async () => {
      const urlAPI =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(urlAPI);
      console.log(result.data.Data);
      setCryptoCurrencys(result.data.Data);
    })();
  }, []);

  const handlerChangeCurrency = (currency: string) => {
    setCurrency(currency);
  };
  const handlerChangeCriptoMoneda = (criptoCurrency: string) => {
    setCryptoCurrency(criptoCurrency);
  };

  const handlerQuotePrice = () => {
    if (currency.trim() !== '' && cryptoCurrency.trim() !== '') {
      // console.log('cotizacion correcta');
      handlerSubmitQuote(currency, cryptoCurrency);
    } else {
      Alert.alert('Parametros no Validos', 'Debe rellenar todos los campos');
    }
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker onValueChange={handlerChangeCurrency} selectedValue={currency}>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Sol Peruano" value="PEN" />
        <Picker.Item label="Dolar de EEUU" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Cryptomoneda</Text>

      <Picker
        onValueChange={handlerChangeCriptoMoneda}
        selectedValue={cryptoCurrency}>
        <Picker.Item label="- Seleccione -" value="" />
        {cryptoCurrencys.map((crypto: any) => (
          <Picker.Item
            key={crypto.CoinInfo.Id}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight onPress={handlerQuotePrice} style={styles.btnCotizar}>
        <Text style={styles.txtBtnCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontFamily: FontFamilyEnum.LatoBlack,
    textTransform: 'uppercase',
    fontSize: 20,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  txtBtnCotizar: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: FontFamilyEnum.LatoBlack,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
export default FormCrypto;
