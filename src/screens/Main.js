import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, FlatList,} from 'react-native';
import {TextInput, ListItem, Avatar} from '@react-native-material/core';
import Header from '../components/Header';
import data from '../../api/SampleData';
import { Context } from '../Context/messageContext';

const Main = () => {
  const [text, setText] = useState('');
  const {boundActions} = useContext(Context)
  const [apiData, setAPIData] = useState([])

  useEffect(() => {
    const result = boundActions.getMessages();
    setAPIData(result);
  },[])

  return (
    <View style={styles.mainView}>
      <Header />
      <FlatList 
      data={apiData}
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