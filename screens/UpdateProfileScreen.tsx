import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import axios from 'axios';
import { config } from '../config';
import Banner from '../components/banner';
import { save,getValueFor } from '../components/api/store'
import {getProfile} from '../model/data';

export default function UpdateProfile ({navigation ,route}:any) {
      const profile = route.params?.profile
  const [firstname, setFirstName] = React.useState(profile.firstname);
  const [lastname, setLastName] = React.useState(profile.lastname);
  const [username, setUserName] = React.useState(profile.username);
  const [description, setDescription] = React.useState(profile.description);

  async function saveProfile()
  {
    let tokenName = 'nxp_token';
    let token = await getValueFor(tokenName);
    const AuthStr = 'Bearer '.concat(token);

   
      const _method = 'PATCH';
      const payload = { firstname, lastname, username, description, _method }
      const axiosConfig = { headers: { Authorization: AuthStr } };
      const response = await axios.post(config.apiUrl+'profile',payload,axiosConfig)
      .then(res =>  {
            res.data
            navigation.navigate('Onboarding',)
      })
      .catch(err => console.log('error ' + err))

      return response


    /* const configurationObject = {
      url: config.apiUrl+'profile/photo',
      _method: "PATCH",
      data: { firstname, lastname, username, description },
      headers: {
            Authorization: AuthStr,
      }
    };
      let response = await axios.post(configurationObject) 
                  .then(res =>  res.data)
                  .catch(err => console.log('error ' + err)) */
    
}


  return(
    <View style={styles.container}>
           <Text style={styles.title}>
            Update Profile
            </Text>

            <View style={styles.profileView}>

            <Text style={styles.label}> Username</Text>
            <TextInput style={styles.input} 
            placeholderTextColor={'#000000'}
            placeholder={profile.username}
            onChangeText={(newUsername)=> setUserName(newUsername)}/>

            <Text style={styles.label}> Firstname </Text>
            <TextInput style={styles.input}
            placeholderTextColor={'#000000'}
            placeholder={profile.firstname}
            onChangeText={(newFirstName)=> setFirstName(newFirstName)}/>

            <Text style={styles.label}> Lastname</Text>
            <TextInput style={styles.input} 
            placeholderTextColor={'#000000'}
            placeholder={profile.lastname}
            onChangeText={(newLastname)=> setLastName(newLastname)}/>

            <Text style={styles.label}> Description</Text>
            <TextInput style={styles.input} 
            placeholderTextColor={'#000000'}
            placeholder={profile.description}
            onChangeText={(newDescription)=> setDescription(newDescription)}/>
            </View>


      <TouchableOpacity 
          style={styles.loginButton}
              onPress={saveProfile}>

        <Text style={styles.loginText}> 
          Save  
        </Text>
      </TouchableOpacity> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'},
  title: { fontSize:30, fontWeight:'bold', paddingVertical:20, textAlign:'center'},
  label:{color:'#e7e7e7',fontWeight:'bold', paddingTop:20},
  input:{ borderBottomColor:'#f1f1f1', borderBottomWidth:1, fontWeight:'bold', color:'black', fontSize:18, paddingVertical:10},
  loginButton:{padding:10, borderRadius:30, alignItems:'center',backgroundColor: '#43c6a6', marginTop:20},
  loginText:{color:'white', fontWeight:'bold', marginHorizontal:100, fontSize:20},
  profileView:{borderColor:'#f1f1f1', borderWidth:3, borderRadius:30, paddingHorizontal:40},
  

});