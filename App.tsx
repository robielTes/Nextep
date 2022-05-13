import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Login from './component/login';

export default class App extends Component {
  render (){
    return (
     <ScrollView>
        <View style={styles.container }>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 10,
          }}> 
          <Text style={{fontSize:30,fontWeight:'bold', paddingVertical:40}}>
          Login
        </Text>
          </View>
        <Login />
        <StatusBar style="auto" />
      </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
