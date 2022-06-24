import React from 'react';
import {Image, StyleSheet, View, SafeAreaView} from 'react-native';
import { config} from '../config'
import { Dimensions } from 'react-native';

export default function PhotoFullScreen (props: any) {
      const size = Dimensions.get('window').width-20;
      return(
           <SafeAreaView style={styles.container}>               
                 <View style={styles.container}>
                  <Image
                        source={require('../assets/image/daisy.png')||{uri: config.photoUrl+props.route.params.picture}}
                        style={{ width: size, height: size, }}/>                             
           </View>
           </SafeAreaView>
      );
}
const styles = StyleSheet.create({
      container: {flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical:10},
});
