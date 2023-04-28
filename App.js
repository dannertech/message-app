import { StyleSheet, Text, View } from 'react-native';
import {TextInput, ListItem, Avatar} from '@react-native-material/core';
import Header from './src/components/Header';

const App = () => {
  return (
    <View>
      <Header />
      <Text>This is the app page</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default App;