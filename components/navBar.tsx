import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import NavItem from './navItam';



export default function NavBar () {
  const navItems = [
    {
      name: 'Home',
      imageUrl: require('../assets/image/nav/home.png'),
    },
    {
      name: 'Vote',
      imageUrl: require('../assets/image/nav/vote.png'),
    },
    {
      name: 'Profile',
      imageUrl: require('../assets/image/nav/profile.png'),
    },
  ];
    return(
      <View style={styles.container}>
        <FlatList
          data={navItems}
          renderItem={({ item }) => <NavItem name={item.name} imageUrl={item.imageUrl} />}
          keyExtractor={item => item.name}
          horizontal
        />
      </View>
  );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#33354E',
        justifyContent: 'center',
        alignItems: 'center',
        
      }
    });
  