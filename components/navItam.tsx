import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';



export default function NavItem (props:any)  {
    return(
      <TouchableOpacity onPress={props.handlePress}>
        <View style={[styles.container,
          props.active ? {backgroundColor:'#43c6a6'}:{backgroundColor:'#33354E'}]}>
          <View>
            <Image style={styles.image} source={props.imageUrl} />
          </View>
          <Text>
            {props.name}
          </Text>
        </View>
      </TouchableOpacity>
  );
    }
    const styles = StyleSheet.create({
      container: {
        width:100,
        height:90,
        borderRadius:20,
        marginLeft:37,
        marginVertical:25,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#000',
      },
      image: {
        width:35,
        height:35,
      }
    });
  