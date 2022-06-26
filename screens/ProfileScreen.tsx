import React from 'react';
import {StyleSheet, ScrollView,TouchableOpacity,Image, Text, View} from 'react-native';
import { config } from '../config';
import Info from '../components/profile/info';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import FormData from 'form-data'
import { getValueFor } from '../components/api/store';
import { getProfile } from '../model/data';
import NavBar from '../navigation/navBar';

export default function Profile ({navigation ,route}:any) {
      const profile = route.params?.profile
      let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      const [image, setImage] = React.useState('');


      const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });
            if (result.cancelled) return

            return result;
      }
      const uploadImage = async () => {

            let image = await pickImage()

            let localUri = image.uri
            let filename = localUri.split('/').pop();

            setImage(localUri)
            
            
            const formData = new FormData()
            
            formData.append('photo',
            {
               uri: localUri,
               name:filename,
               type : "image/png"
            });

            let tokenName = 'nxp_token';
            let token = await getValueFor(tokenName);

            const AuthStr = 'Bearer '.concat(token as string);
            const response = await axios.post(config.apiUrl+'profile/photo',formData,{
                  headers: {
                     Authorization: AuthStr,
                    'Content-Type': 'multipart/form-data'
                  },
                  transformRequest: (data, response) =>{
                        return formData
                  },
            })
            .then(res =>  {
                  res.data
                  navigation.navigate('Onboarding',)
            })
            .catch(err => console.log('error ' + err))
            return response

            
      }

      async function updateProfile() {
            let tokenName = 'nxp_token';
            let token = await getValueFor(tokenName);
            let profile = await getProfile(token)
            navigation.navigate({
            name: 'UpdateProfile',
            params: {profile: profile} }); 
      }

      return(
           <View style={{paddingBottom:90}}>
                  <ScrollView style={{backgroundColor: '#fff'}}>
                  <View style={styles.container}>
                  <TouchableOpacity onPress={updateProfile}>
                                          <Image
                                          source={require('../assets/image/pencile.png')}
                                          style={styles.editProfile}/>
                              </TouchableOpacity>
                  <View>
                  <TouchableOpacity onPress={()=> navigation.navigate({                       
                        name: 'ProfilePhoto',
                        params: { picture: profile.picture}
                  })}>
                        <Image
                        source={{uri: image || config.photoUrl+profile.picture}}
                        style={styles.image}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={uploadImage}>
                        <Image
                        source={require('../assets/image/camera.png')}
                        style={styles.editImage}/>
                  </TouchableOpacity>
                 
           </View>                      
                        <View style={{marginBottom:10}}>
                              <Text style={styles.title}>
                                    {profile.username}
                              </Text>                            
                             
                              <View style={styles.profileView}>
                             
                                    <Info title="Last Name" value={profile.lastname} /> 
                                    <Info title="First Name" value={profile.firstname} />    
                                    <Info title="Email" value={profile.email} />
                                    <Info title="About" value={profile.description||lorem} />
                              </View>
                              
                        </View>
                  </View>

            </ScrollView>
            <NavBar style={styles.navbar} navigation={navigation} />
           </View>
      );
  }
  const styles = StyleSheet.create({
        container:{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical:10},
        title: { fontSize:30,alignItems: 'center',fontWeight:'bold', padding:20},
        profileView:{borderColor:'#f1f1f1', borderWidth:3, borderRadius:30, padding:10},
        image:{width: 170, height: 170, borderRadius:100, alignItems: 'center',marginTop:10},
        editImage:{width: 50, height: 50, borderRadius:100, alignItems: 'center',marginTop:-45, marginLeft:120, borderColor:'#000', borderWidth:3},
        editProfile:{width: 35, height: 35, position:'absolute', top:10, left:150},
       navbar: {position: 'absolute', top:20, left: 0, right: 0, backgroundColor: '#fff'},
  });