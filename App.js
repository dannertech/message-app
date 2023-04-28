import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList,} from 'react-native';
import {TextInput, ListItem, Avatar} from '@react-native-material/core';
import Header from './src/components/Header';
import data from './api/SampleData';

const App = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      <FlatList 
      data={data}
      renderItem={({item}) => {
        return <ListItem title={item.title} secondaryText={item.message} leadingMode='avatar' 
        leading={
          <Avatar image={{uri: item.avatar}}/>
        }
        />
      }}
      horizontal={false}
      
      />
      <TextInput label="Message Here" style={styles.inputStyle}/>
    </View>
  )
};

const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 50,
    marginBottom: 50
  },
  mainView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default App;