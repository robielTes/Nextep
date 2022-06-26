import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import NavItem from './navItam';

import { getValueFor,deleteItem } from '../components/api/store';
import { getProfile, getVoteTopics } from '../model/data';



export default function NavBar ({navigation}: any) {
  const [term, setTerm] = React.useState('Home');
  const navItems = [
    {
      name: 'profile',
      imageUrl: require('../assets/image/nav/home.png'),
    },
    {
      name: 'Vote',
      imageUrl: require('../assets/image/nav/vote.png'),
    },
    {
      name: 'Logout',
      imageUrl: require('../assets/image/nav/profile.png'),
    },
  ];
  async function navHome(){
    let tokenName = 'nxp_token';
    let token = await getValueFor(tokenName);
    let profile = await getProfile(token);
    navigation.navigate({
      name: 'VoteTopics',
      params: {profile: profile}
      }); 
  }

  async function navVoteTopics(){
   let tokenName = 'nxp_token';
    let token = await getValueFor(tokenName);
    let profile = await getProfile(token);
    let voteTopics = await getVoteTopics(token);
    navigation.navigate({
      name: 'VoteTopics',
      params: {votes: voteTopics,
      profile: profile}
      }); 
  }

  async function logout(){

    let tokenName = 'nxp_token';
    let token = await deleteItem(tokenName);
    navigation.navigate({
      name: 'Login'
    });

    /* let tokenName = 'nxp_token';
    let token = await getValueFor(tokenName);
    let profile = await getProfile(token);
    navigation.navigate({
      name: 'Profile',
      params: {profile}
    }); */
  }



    return(
      <View style={styles.container}>
        <FlatList
          data={navItems}
          renderItem={({ item }) => 
          <NavItem 
            name={item.name} 
            imageUrl={item.imageUrl}
            active={term === item.name}
            handlePress={()=> {
              setTerm(item.name)
              if (item.name == 'Profile')
              {
                navHome();
              }
              else if (item.name == 'Vote')
              {
                navVoteTopics();
              }
              else if (item.name == 'Logout')
              {
                logout();
              }
            }
            }
          />}
          keyExtractor={item => item.name}
          horizontal
        />
      </View>
  );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#33354E',
        justifyContent: 'center',
        alignItems: 'center',
        
      }
    });
  