import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./app/components/Header";
import Subtitle from "./app/components/Subtitle";
import Input from "./app/components/Input";
import Listitem from "./app/components/Listitem";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headercenter}>
        <Header/>
      </View>

      <View style = {styles.subtitleposition}>
        <Subtitle title="해야 할 일"/>
        <Input/>
      </View>

      <View style = {styles.subtitleposition}>
        <Subtitle title="해야 할 일 목록"/>
        <Listitem name="멋쟁이 사자되기"/>
        <Listitem name="필라테스하기"/>
        <Listitem name="스페인어 공부하기"/>
        <Listitem name="드로잉 연습하기"/>
        <Listitem name="시험공부 하기"/>
        <Listitem name="팀플하기"/>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercenter:{
    alignItems:"center",
    borderWidth:5,
  },

  subtitleposition:{
      marginLeft:30,
  }
});
