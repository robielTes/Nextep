import React,{Component} from 'react';
import {Text, View} from 'react-native';


export default class Banner extends Component {
      render()
      {
         return(
             <View style={{paddingBottom:10, paddingTop:10}}>
                  <Text style={{fontSize:35,fontWeight:'bold', paddingVertical:40, fontStyle:'italic'}}>
                        Nextep
                  </Text>
         </View>
           
         );
       }
  }