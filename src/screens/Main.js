import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList,} from 'react-native';
import {TextInput, ListItem, Avatar} from '@react-native-material/core';
import Header from '../components/Header';
import data from '../../api/SampleData';

const Main = () => {
  const [text, setText] = useState('');
  

  useEffect(() => {
    
  },[])

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
      <TextInput label="Message Here" style={styles.inputStyle} onChangeText={(newText) => setText(newText)} value={text}/>
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

export default Main;