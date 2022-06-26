import React from 'react';
import { StyleSheet, View,Text, FlatList, TextInput, TouchableOpacity, Image} from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { config } from '../config';


export default function VoteScreen ({navigation ,route}:any)  {

  const [up, setUp] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [counter, setCounter] = React.useState(Math.floor(Math.random() * 100))
  const vote = route.params?.item;

  let topics = route.params?.votes;
  let profile = route.params?.profile;
  async function profilePressed()
  {
      navigation.navigate({
      name: 'Profile',
      params: {profile}
      });
  }

  async function votePressed(vote)
  {
      if (vote == 'up' && up == false)
      {
        setUp(true);
        setDown(false);
        setCounter(counter + 1);
      }else if(vote == 'down' && down == false){
        setDown(true);
        setUp(false);
        setCounter(counter - 1);
      }
  }

  return(
    <View style={styles.container}>

      <TouchableOpacity onPress={profilePressed}>
          <Image
          source={{uri:config.photoUrl+profile.picture}}
          style={styles.image}/>
      </TouchableOpacity>

      <View style={styles.topicsContainer}>
          <Text style={styles.vote} >
            {vote.subject}
          </Text>
          <Text style={styles.timestamp} >
          created at {vote.created_at.split('T')[0]}
          </Text>
        <View style={styles.voteContainer}>
        <TouchableOpacity onPress={()=>votePressed('up')}>
        <Feather name="thumbs-up" size={60} color={up?'#ff0000':'#33354E'} />
        </TouchableOpacity>
        <Text style={styles.voteCount}>{counter}</Text>
        <TouchableOpacity onPress={()=>votePressed('down')}>
        <Feather name="thumbs-down" size={60} color={down?'#ff0000':'#33354E'} />
        </TouchableOpacity>
         </View>   
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
      alignItems: 'center',
      
    },
    vote: { fontSize:30, fontWeight:'bold', paddingTop:100, textAlign:'center'},
    image:{width: 60, height: 60, borderRadius:100,marginTop:10 ,position:'absolute', top:0, left:120},
    timestamp: { fontSize:15, fontStyle:'italic', paddingTop:10, textAlign:'center'},
    voteContainer: { flexDirection:'row', justifyContent:'center', alignItems:'center',paddingVertical:100},
    voteCount: { fontSize:30, fontWeight:'bold', paddingHorizontal:10, textAlign:'center'},
  });

  