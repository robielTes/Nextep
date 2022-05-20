import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Banner from './components/banner';
import Login from './components/login';

export default class App extends Component {
  render (){
    return (
     <ScrollView>
        <View style={styles.container }>
          <Banner />
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
