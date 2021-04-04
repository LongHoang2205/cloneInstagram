import React,{Component} from 'react';
import { TextInput, View,Text } from 'react-native';

class Heart extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:30}}>  
                    Heart
                </Text>
            </View>
        );
    }
}
export default Heart;