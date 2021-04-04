import React, { Component } from 'react';
import { Image,View,Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './PostStyle';

class FooterPost extends Component{
    heartPress=()=>{
        alert('this is heart')
    }
    commentPress=()=>{
        alert('this is comment')
    }
    savePress=()=>{
        alert('this is save')
    }
    render(){
        return(
            <View style={styles.footerPost}>
                <TouchableHighlight>
                    <Icon name="heart-o"  size={25} style={styles.footer} onPress={this.heartPress}/>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Icon name="comment-o"  size={25} style={styles.footer} onPress={this.commentPress}/>
                </TouchableHighlight>
                <TouchableHighlight>
                 <Icon name="bookmark-o"  size={25} style={{marginLeft:250}} onPress={this.savePress}/>
                </TouchableHighlight>
            </View>    
        )
    }
    
}
export default FooterPost;