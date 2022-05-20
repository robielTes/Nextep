import React,{Component} from 'react';
import { Text, View,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { config } from '../config';



export default class Login extends Component {
    state = {
      isLogIn :false,
      isSignIn :false,
      username:'',
      password:'',
      token:'',
      profile:'',
    };
     render()
     {
        return(
          <View>
            <View style={{marginBottom:10}}>
            <Text style={{fontSize:30,fontWeight:'bold', paddingVertical:40,textAlign:'center',}}>
              Login
            </Text>
            <View style={{paddingBottom:80, paddingTop:60}}>
                
                <Text style={{color:'#e7e7e7',fontWeight:'bold'}}>
                    Username or Email
                </Text>
                <TextInput style={{borderBottomColor:'#f1f1f1', borderBottomWidth:1, fontWeight:'bold', color:'black',fontSize:18, paddingVertical:10}}
                placeholderTextColor={'#000000'}
                placeholder="Enter your username or email"
                onChangeText={(newUsername)=> this.setState({username:newUsername})}/>
                <Text style={{color:'#e7e7e7',fontWeight:'bold',paddingTop:10}}>
                    Enter Password
                </Text>
                <TextInput style={{borderBottomColor:'#f1f1f1', borderBottomWidth:1, fontWeight:'bold',fontSize:18, paddingVertical:10}} 
                placeholderTextColor={'#000000'}
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={(newPassword)=> this.setState({password:newPassword})}/>
            </View>


            <TouchableOpacity 
                style={{ padding:10, borderRadius:30, alignItems:'center',
                    backgroundColor: this.state.isLogIn?'white':'#43c6a6'}}
                    onPress={() => {
                      
                      axios.post(config.apiurl+'mytoken',{
                        'username':this.state.username,
                        'password':this.state.password})
                        .then(res => {
                          this.setState({token:res.data});
                          this.setState({isLogIn:true});
                        } )
                        .catch(err => {
                          console.log(err);
                      
                        }
                      );
                    }
                    }>

             <Text style={{color: this.state.isLogIn?'#43c6a6': 'white', fontWeight:'bold', marginHorizontal:100, fontSize:20}}> 
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
}

  
