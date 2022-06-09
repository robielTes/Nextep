import React from 'react';
import {Text, StyleSheet} from 'react-native';


export default function Banner (){
      return(
            <Text style={styles.container}>
                  Nextep
            </Text>
      );
}
const styles = StyleSheet.create({
      container:{fontSize:35,fontWeight:'bold', fontStyle:'italic'},
});