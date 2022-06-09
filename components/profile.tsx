import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import { config } from '../config';
import Photo from './profile/photo';
import Info from './profile/info';


export default function Profile ({route}) {
      const profile = route.params?.profile
      return(
            <ScrollView style={{backgroundColor: '#fff'}}>
                  <View style={styles.container}>
                        <Photo source={{uri: config.photoUrl+profile.picture}} />
                        <View style={{marginBottom:10}}>
                              <Text style={styles.title}>
                                    {profile.username}
                              </Text>                            

                              <View style={styles.profileView}>
                                    <Info title="Name" value={profile.lastname +" "+profile.firstname} />    
                                    <Info title="Email" value={profile.email} />
                              </View>
                        </View>
                  </View>
            </ScrollView>
      );
  }
  const styles = StyleSheet.create({
        container:{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical:10},
        title: { fontSize:30,alignItems: 'center',fontWeight:'bold', paddingVertical:30},
        profileView:{borderColor:'#f1f1f1', borderWidth:3, borderRadius:30, padding:20}
  });
