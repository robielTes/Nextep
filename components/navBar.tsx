import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import NavItem from './navItam';



export default function NavBar () {
  const [term, setTerm] = React.useState('Home');
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
          renderItem={({ item }) => 
          <NavItem 
            name={item.name} 
            imageUrl={item.imageUrl}
            active={term === item.name}
            handlePress={()=> {
              setTerm(item.name)
              alert(item.name)
            }} 
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
  