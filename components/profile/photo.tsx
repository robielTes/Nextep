import React from 'react';
import {Image, StyleSheet,TouchableOpacity, View} from 'react-native';


export default function profilePhoto (props: any) {
      return(
           <View style={styles.container}>
                  <TouchableOpacity>
                        <Image
                        source={props.source}
                        style={styles.image}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                        <Image
                        source={require('../../assets/image/camera.png')}
                        style={styles.editImage}/>
                  </TouchableOpacity>
                 
           </View>
      );
}

const styles = StyleSheet.create({
      container: {},
      image:{width: 170, height: 170, borderRadius:100, alignItems: 'center',marginTop:10},
      editImage:{width: 50, height: 50, borderRadius:100, alignItems: 'center',marginTop:-45, marginLeft:120, borderColor:'#000', borderWidth:3}
});