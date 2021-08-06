import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {FontFamilyEnum} from '../../utils/env';
interface MyProps {}
const defaultProps = {};
const Header = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;

  return <Text style={styles.header}>Criptomonedas</Text>;
};
const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: FontFamilyEnum.LatoBlack,
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
  },
});
export default Header;
