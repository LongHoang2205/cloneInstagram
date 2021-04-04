import React, { Component } from 'react';
import { Image,View,Text, Touchable, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import styles from './PostStyle';
import Modal from '../Modal';
import Search from '../pages/Search';
import { createStackNavigator } from 'react-navigation';
import {SearchScreen} from '../../screensName';
import Button from 'react-native-button';


class HeadPost extends Component{
    PressButton=()=>{
        // this.props.PressButton();
         alert('modal')
    }
    render(){
        const {navigation} =this.props;
        return(
             <View style={styles.head}>
                <View style={styles.left}>
                <Image source={{uri:this.props.item.avatar}}
            style={styles.icon}/>
             <Button
        onPress={() => {
          alert('Day la trang ca nhan cua toi');
        }}
        >
                <Text style={styles.txtIcon}>{this.props.item.name}</Text>
            </Button> 
                </View>
            <View style={{marginLeft:250}}>
            <TouchableHighlight
                onPress={this.PressButton}
            >
            <Icon name="dots-three-horizontal" size={20} />
            </TouchableHighlight>
            </View>
                            
            </View>
             
        )
    }
    
}
export default HeadPost;