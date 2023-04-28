import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {TextInput, ListItem, Avatar} from '@react-native-material/core';
import Header from './src/components/Header';
import data from './api/SampleData';

const App = () => {
  return (
    <View>
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
    </View>
  )
};

const styles = StyleSheet.create({
  
});

export default App;