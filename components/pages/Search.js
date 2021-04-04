import React,{Component} from 'react';
import { Text, TextInput, View } from 'react-native';

class Search extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:30}}>
                    Search
                </Text>
            </View>
        );
    }
}
export default Search;