import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { getValueFor } from '../components/api/store';
import { getProfile,getVoteTopics } from '../model/data';

const OnboardingScreen = ({navigation}: any)  => {
  const [isLogIn, setIsLogIn] = React.useState(false);

  async function okPressed()
  {
    let tokenName = 'nxp_token';

    let token = await getValueFor(tokenName);
    if (token) {
      let voteTopics = await getVoteTopics(token)
      let profile = await getProfile(token)
      navigation.navigate({
      name: 'Vote',
      params: {votes: voteTopics,
      profile: profile}
      }); 
    }else{navigation.navigate('Login')}
  }

 return (

<SafeAreaView style={styles.container}>

  <View>
      <Text style={styles.title}> NEXTEP </Text>
  </View>
  <View style={styles.ImageContainer}>
    <Image style={styles.image}
    source={require('../assets/image/NEXTEP-Crypto-Currency-logo-1.png')} />
  </View>
  <TouchableOpacity 
  onPress={okPressed}
  style={styles.button}>
    <Text style={styles.buttonText}>Bienvenue</Text>
    <MaterialIcons name="arrow-forward" size={30} color='#fff'/>
  </TouchableOpacity>
</SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'},
  title:{fontSize:40, fontWeight:'bold',color:'#33354E', marginTop:70},
  image:{width: 250, height: 250, alignItems: 'center',marginTop:10},
  ImageContainer:{flex:1,justifyContent:'center',alignItems:'center',},
  button:{backgroundColor:'#ad40af', padding:20, width:'90%', justifyContent:'space-between', flexDirection:'row', borderRadius:10, marginBottom:50},
  buttonText:{fontSize:20, fontWeight:'bold',color:'#fff', fontStyle:'italic'}

});

export default OnboardingScreen;