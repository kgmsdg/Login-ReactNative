import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

import Button from '../components/Button';

function Welcome({navigation}){

  function goToMemberSign(){
    navigation.navigate('MemberSignScreen')
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Trendyol</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign}></Button>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  }
})