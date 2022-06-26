import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import NavBar from '../navigation/navBar';



export default function HomeScreen () {

    return(
      <View style={styles.container}>
        <Text>Home</Text>

      <NavBar />
      </View>
  );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }
    });
  