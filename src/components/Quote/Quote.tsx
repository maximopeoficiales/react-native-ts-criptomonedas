import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontFamilyEnum} from '../../utils/env';
interface MyProps {
  data: any;
}
const defaultProps = {};
const Quote = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {data} = props;

  if (Object.keys(data).length == 0) return null;

  return (
    <View style={styles.resultado}>
      <Text style={[styles.texto, styles.precio]}>
        <Text style={styles.span}>{data.PRICE}</Text>
      </Text>
      <Text style={styles.texto}>
        Precio mas alto del dia: {''}
        <Text style={styles.span}>{data.HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        Precio mas bajo de dia: {''}
        <Text style={styles.span}>{data.LOWDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        Variacion en las ultimas 24 horas: {''}
        <Text style={styles.span}>{data.CHANGEPCT24HOUR}</Text>
      </Text>
      <Text style={styles.texto}>
        Ultima actualizacion: {''}
        <Text style={styles.span}>{data.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5E49E2',
    padding: 20,
  },
  texto: {
    color: '#FFFFFF',
    fontFamily: FontFamilyEnum.LatoRegular,
    fontSize: 18,
    marginBottom: 10,
  },
  span: {
    fontFamily: FontFamilyEnum.LatoRegular,
    fontWeight: 'bold',
  },
  precio: {
    fontSize: 38,
    textAlign: 'center',
  },
});
export default Quote;
