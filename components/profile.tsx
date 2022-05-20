import React from 'react';
import {Text, View} from 'react-native';
import Banner from './banner';


export default function Profile ({navigation,route}) {
      return(
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
                  <Banner/>
                  <View style={{marginBottom:10}}>
                  <Text style={{fontSize:30,fontWeight:'bold', paddingVertical:40,textAlign:'center',}}>
                  {route.params?.token}
                  </Text>
                  </View>
            </View>
      );
  }
