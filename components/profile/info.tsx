import React from 'react';
import {Text, View} from 'react-native';


export default function profileInfo (props: any) {
      return(
            <View style={{paddingVertical:30,borderBottomColor:'#f1f1f1', borderBottomWidth:1}}>
                  <Text style={{fontSize:15,fontWeight:'600',color:'#e7e7e7'}}>
                        {props.title}
                  </Text>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>
                        {props.value}
                  </Text>
            </View>
           );
}
