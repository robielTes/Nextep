import React from 'react';
import {StyleSheet, ScrollView,TouchableOpacity,Image, Text, View} from 'react-native';
import { config } from '../config';
import Info from './profile/info';


export default function Profile ({navigation ,route}:any) {
      const profile = route.params?.profile
      let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

      return(
            <ScrollView style={{backgroundColor: '#fff'}}>
                  <View style={styles.container}>
                  <View>
                  <TouchableOpacity onPress={()=> navigation.navigate({                       
                        name: 'ProfilePhoto',
                        params: { picture: profile.picture}
                  })}>
                        <Image
                        source={{uri: config.photoUrl+profile.picture}}
                        style={styles.image}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
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
                                    <Info title="Name" value={profile.lastname +" "+profile.firstname} />    
                                    <Info title="Email" value={profile.email} />
                                    <Info title="About" value={profile.description||lorem} />
                              </View>
                        </View>
                  </View>
            </ScrollView>
      );
  }
  const styles = StyleSheet.create({
        container:{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical:10},
        title: { fontSize:30,alignItems: 'center',fontWeight:'bold', padding:20},
        profileView:{borderColor:'#f1f1f1', borderWidth:3, borderRadius:30, padding:10},
        image:{width: 170, height: 170, borderRadius:100, alignItems: 'center',marginTop:10},
        editImage:{width: 50, height: 50, borderRadius:100, alignItems: 'center',marginTop:-45, marginLeft:120, borderColor:'#000', borderWidth:3}
  });
