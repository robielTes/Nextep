import React from 'react';
import {ScrollView, Text, View,Image} from 'react-native';
import { config } from '../config';


export default function Profile ({route}) {
      const profile = route.params?.profile
      return(
            <ScrollView style={{backgroundColor: '#fff'}}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical:10}}>
                        <Image
                         source={{uri: config.photoUrl+profile.picture}}
                        style={{ width: 200, height: 200, borderRadius:100, alignItems: 'center' }}/>
                        <View style={{marginBottom:10}}>
                              <Text style={{fontSize:30,alignItems: 'center',fontWeight:'bold', paddingVertical:30}}>
                                    {profile.username}
                              </Text>                            

                              <View style={{borderColor:'#f1f1f1', borderWidth:3, borderRadius:30, padding:20}}>
                                    <View style={{paddingVertical:30,borderBottomColor:'#f1f1f1', borderBottomWidth:1}}>
                                          <Text style={{fontSize:15,fontWeight:'600',color:'#e7e7e7'}}>
                                                Name
                                          </Text>
                                          <Text style={{fontSize:20,fontWeight:'bold'}}>
                                                {profile.lastname +" "+profile.firstname}
                                          </Text>
                                    </View>

                                    <View style={{paddingVertical:30}}>
                                          <Text style={{fontSize:15,fontWeight:'600',color:'#e7e7e7'}}>
                                          Email
                                          </Text>
                                          <Text style={{fontSize:20,fontWeight:'bold'}}>
                                          {profile.email}
                                          </Text>
                                    </View>
                              </View>
                        </View>
                  </View>
            </ScrollView>
      );
  }
