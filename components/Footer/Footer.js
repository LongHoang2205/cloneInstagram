import React,{Component} from 'react';
import {View,Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import styles from './FooterStyle';


class Footer extends Component{
    render(){
        return(
            <View style={styles.footer}>
                <TouchableHighlight>
                <Icon1 name="home" size={25} style={styles.footerIcon}/> 
                </TouchableHighlight>
                <TouchableHighlight >
                <Icon2 name="search" size={25} style={styles.footerIcon}/>
                </TouchableHighlight>
                
                <Icon name="plus-square-o" size={25} style={styles.footerIcon}/> 
                <Icon name="heart-o" size={25} style={styles.footerIcon}/> 
                <Icon3 name="person-outline" size={25} style={styles.footerIcon}/> 
            </View>
         
            
        );
    }
}

export default Footer;

