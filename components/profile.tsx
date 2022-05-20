import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import Banner from './banner';
import { config } from '../config';


export default function Profile ({navigation,route}) {
      const profile = route.params?.profile
      return(
            <ScrollView>
                  <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
                  <Banner/>
                  <View style={{marginBottom:10}}>
                 {
                       Object.keys(profile).map((value,key) => (
                        <Text style={{fontSize:15,fontWeight:'bold', paddingVertical:10}}>
                        {value}   :   {profile[value]}
                        </Text>      
                       ))
                 }
                  </View>
            </View>
            </ScrollView>
      );
  }
