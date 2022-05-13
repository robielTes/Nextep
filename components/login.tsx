import React,{Component} from 'react';
import { Text, View,TouchableOpacity,TextInput} from 'react-native';



export default class Login extends Component {
    state = {
      isLogIn :false,
      isSignIn :false,
      username:'',
      password:'',
    };
     render()
     {
        return(
          <View>
            <View style={{marginBottom:10}}>
            <View style={{paddingBottom:80, paddingTop:80}}>
                
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
                     if(this.state.username=='Admin' && this.state.password=='Admin')
                     {
                       this.setState({isLogIn:true})
                     }
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
  
