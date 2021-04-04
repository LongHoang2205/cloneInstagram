import React, { Component } from 'react';
import { Image,View,Text } from 'react-native';
import styles from './StoriesStyle';

class StoriesItem extends Component{
    render(){
        return(
            <View>
            <Image source={{uri:this.props.item.avatar}}
            style={styles.img}/>
            <Text style={styles.txt}>{this.props.item.name}</Text>
            </View>    
        )
    }
    
}
export default StoriesItem;