import React,{Component} from 'react';
import { TextInput, View,Text } from 'react-native';

class Add extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:30}}>  
                    Add
                </Text>
            </View>
        );
    }
}
export default Add;