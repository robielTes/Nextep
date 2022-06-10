import React from 'react';
import {Text, View,Image,TouchableOpacity, StyleSheet} from 'react-native';


export default function profileInfo (props: any) {
      return(
            <View style={styles.container}>
                 <View style={styles.itemContainerLeft}>
                        <Text style={styles.title}>
                        {props.title}
                        </Text>
                        <Text style={styles.value} numberOfLines={1}>
                              {props.value}
                        </Text>
                 </View>
                  <View>
                        <TouchableOpacity>

                        <Image
                              style={styles.image}
                              source={require('../../assets/image/pencile.png')}/>
                        </TouchableOpacity>
                  </View>
            
            </View>
           );
}

const styles = StyleSheet.create({
      container:{paddingVertical:15,borderBottomColor:'#f1f1f1', borderBottomWidth:1, flexDirection:'row'},
      itemContainerLeft:{flex:1},
      title: { fontSize:15,fontWeight:'400',color:'#e7e7e7'},
      value: { fontSize:20,fontWeight:'500'},
      image: {width:20, height:20, marginLeft:10}
});