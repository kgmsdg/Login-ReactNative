import React, {useState} from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button/Button';

function MemberSign({navigation}){

  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit(){

    if(!userName || !userSurname || !userAge || !userMail) {
        Alert.alert('Trendyol', 'Bilgiler boş bırakılamaz!'); 
        return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };

    console.log(user);

    navigation.navigate('MemberResultScreen', {user});
  }

  return(
    <SafeAreaView>
      <Input label="Üye Adı" placeholder="Adınızı giriniz..." onChangeText={text => setUserName(text)}/>
      <Input label="Üye Soyadı" placeholder="Soyadınızı giriniz..." onChangeText={setUserSurname} />
      <Input label="Üye Yaş" placeholder="Yaşınızı giriniz..." onChangeText={setUserAge}/>
      <Input label="E-Mail" placeholder="E-Mail adresinizi giriniz..." onChangeText={setUserMail}/>
      <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
    </SafeAreaView>
  )
}
export default MemberSign;