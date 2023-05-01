import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import {TextInput, ListItem, Avatar} from '@react-native-material/core';
import Header from '../components/Header';
import data from '../../api/SampleData';
import { Context } from '../Context/messageContext';

const Main = () => {
  const [text, setText] = useState('');
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const MessageContext = useContext(Context);



  useEffect(() => {
    MessageContext.boundActions.getMessages()
    
   //comment
  }, [])
  
  return (
    <View style={styles.mainView}>
      <Header />
      <FlatList 
      data={MessageContext.state}
      renderItem={({item}) => {
        console.log(item)
        return <ListItem title={item.title} secondaryText={item.message} leadingMode='avatar' 
        leading={
          <Avatar image={{uri: item.avatar}}/>
        }
        />
      }}
      horizontal={false}
      
      />
      <View style={styles.messageView}>
      <TextInput label="Message Here" style={styles.inputStyle} onChangeText={(newText) => setText(newText)} value={text}/>
      <TouchableOpacity onPress={() => MessageContext.boundActions.addMessage(text)}>
        <Image source={require('../../assets/icons8-email-send-48.png')}/>
      </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  inputStyle: {
    width: 200,
    marginBottom: 50
  },
  mainView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  messageView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Main;