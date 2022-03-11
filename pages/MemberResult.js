import React from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';

function MemberResult({route}) {

  console.log(route); 

  const {user} = route.params;  

  return(
    <SafeAreaView>
      <Text style={styles.message}>Kayit Tamamlandi</Text>
      <Text style={styles.label}>Adi: {user.userName}</Text>
      <Text style={styles.label}>Soyadi: {user.userSurname}</Text>
      <Text style={styles.label}>Yasi: {user.userAge}</Text>
      <Text style={styles.label}>Email: {user.userMail}</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  }
})

export default MemberResult;