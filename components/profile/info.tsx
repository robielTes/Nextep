import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default function profileInfo (props: any) {
      return(
            <View style={styles.container}>
                  <Text style={styles.title}>
                        {props.title}
                  </Text>
                  <Text style={styles.value}>
                        {props.value}
                  </Text>
            </View>
           );
}

const styles = StyleSheet.create({
      container:{paddingVertical:30,borderBottomColor:'#f1f1f1', borderBottomWidth:1},
      title: { fontSize:15,fontWeight:'600',color:'#e7e7e7'},
      value: { fontSize:20,fontWeight:'bold'},
});