import React from 'react';
import { StyleSheet, View,Text, FlatList} from 'react-native';
import { topics } from '../components/api/store';


export default function VoteScreen () {


  return(
    <View style={styles.container}>

      <Text style={styles.title}>
            Votation
      </Text>
      <FlatList
        data={topics}
        renderItem={({ item }) => (
          <Text numberOfLines={1} style={styles.item}>{item.subject}</Text>
        )}
        keyExtractor={(topic) => topic.id.toString()}
        
      />
    </View>
);
  }
  const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
    }
    ,
    item: {

      borderRadius:20,
      marginHorizontal:10,
      marginVertical:25,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'#000'
    },
    title: { fontSize:30, fontWeight:'bold', paddingVertical:40, textAlign:'center'},
  });

  