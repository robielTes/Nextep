import React from 'react';
import { StyleSheet, View,Text, FlatList, TextInput} from 'react-native';
import Feather from "@expo/vector-icons/Feather";


export default function VoteScreen ({navigation ,route}:any)  {

  let topics = route.params?.votes;

  return(
    <View style={styles.container}>

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
          <Text numberOfLines={1} style={styles.item}>{item.subject}</Text>
        )}
        keyExtractor={(topic) => topic.id.toString()}
        
      />
      </View>
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
  });

  