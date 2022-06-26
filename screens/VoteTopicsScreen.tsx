import React from 'react';
import { StyleSheet, View,Text, FlatList, TextInput, TouchableOpacity, Image} from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import NavBar from '../navigation/navBar';
import { config } from '../config';


export default function VoteTopics ({navigation ,route}:any)  {

  let topics = route.params?.votes;
  let profile = route.params?.profile;
  async function profilePressed()
  {
      navigation.navigate({
      name: 'Profile',
      params: {profile}
      });
  }

  return(
    <View style={styles.container}>

      <TouchableOpacity onPress={profilePressed}>
          <Image
          source={{uri:config.photoUrl+profile.picture}}
          style={styles.image}/>
      </TouchableOpacity>

      <Text style={styles.title}>
            Votation
      </Text>
      <View style={styles.searchButton}>
        <Feather name="search" size={20} color="#33354E" />
        <TextInput  placeholder='search' style={{marginLeft:5}}/>
      </View>
      <View style={styles.topicsContainer}>
      <FlatList 
        data={topics}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> {
            navigation.navigate({
              name: 'Vote',
              params: {item, profile}
            });
          }}>
            <Text numberOfLines={1} style={styles.item}>{item.subject}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(topic) => topic.id.toString()}
        
      />
      </View>
      <NavBar/>
    </View>
);
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
    }, 
    topicsContainer: {
      paddingTop: 30,
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    searchButton:{
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#c6c6c6',
      borderRadius:10,
      width:'90%',
      alignItems:'center',
      padding:10, 
    },
    item: {
      borderRadius:20,
      marginHorizontal:10,
      marginTop:30,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'#000',
      fontSize:20,
    },
    title: { fontSize:30, fontWeight:'bold', paddingVertical:40, textAlign:'center'},
    image:{width: 60, height: 60, borderRadius:100,marginTop:10 ,position:'absolute', top:0, left:120},
  });

  