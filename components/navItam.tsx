import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';



export default function NavItem (props:any)  {
    return(
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={props.imageUrl} />
        </View>
        <Text>
          {props.name}
        </Text>
      </View>
  );
    }
    const styles = StyleSheet.create({
      container: {
        width:100,
        height:90,
        borderRadius:20,
        backgroundColor:'#33354E',//43c6a6',
        marginHorizontal:25,
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
  