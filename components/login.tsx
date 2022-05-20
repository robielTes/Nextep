import React from 'react';
import { Text, View,TouchableOpacity,TextInput} from 'react-native';
import axios from 'axios';
import { config } from '../config';
import Profile from './profile';
import Banner from './banner';



export default function Login () {
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [isSignIn, setIsSignIn] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

        return(
          <View style={{ flex: 1,backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
            <Banner/>
            <View style={{marginBottom:10}}>
            <Text style={{fontSize:30,fontWeight:'bold', paddingVertical:40,textAlign:'center',}}>
            Login
            </Text>
            <View style={{paddingBottom:80, paddingTop:40}}>
                
              <Text style={{color:'#e7e7e7',fontWeight:'bold'}}>
                  Username or Email
              </Text>
              <TextInput style={{borderBottomColor:'#f1f1f1', borderBottomWidth:1, fontWeight:'bold', color:'black',fontSize:18, paddingVertical:10}}
              placeholderTextColor={'#000000'}
              placeholder="Enter your username or email"
              onChangeText={(newUsername)=> setUsername(newUsername)}/>
              <Text style={{color:'#e7e7e7',fontWeight:'bold',paddingTop:10}}>
                  Enter Password
              </Text>
              <TextInput style={{borderBottomColor:'#f1f1f1', borderBottomWidth:1, fontWeight:'bold',fontSize:18, paddingVertical:10}} 
              placeholderTextColor={'#000000'}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(newPassword)=> setPassword(newPassword)}/>
            </View>

            <TouchableOpacity 
                style={{ padding:10, borderRadius:30, alignItems:'center',
                    backgroundColor: '#43c6a6'}}
                    onPress={() => {
                      axios.post(config.apiurl+'mytoken',{
                        'username':username,
                        'password':password})
                        .then(res => {
                          setToken(res.data);
                          setIsLogIn(true);
                        })
                        .catch(err => {
                          setIsLogIn(false);
                        }
                      );           
                    }
                    }>

             <Text style={{color:'white', fontWeight:'bold', marginHorizontal:100, fontSize:20}}> 
                LOGIN  
             </Text>
           </TouchableOpacity> 

            <TouchableOpacity 
                  style={{  borderRadius:10, alignItems:'center', paddingTop:50 }}
                  onPress={() => {}}>
            <Text style={{color:'#43c6a6',fontWeight:'bold', fontSize:15}}>
                Sign Up Now
            </Text>
            </TouchableOpacity> 
            
            </View>
          </View>
          
        );
}

  
