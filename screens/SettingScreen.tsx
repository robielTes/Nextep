import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import NavBar from '../navigation/navBar';


export default function SettingScreen () {

    return(
      <View style={styles.container}>
        <Text>Setting</Text>

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
  