import React, { Component } from 'react';
import { Image,View,Text,ScrollView } from 'react-native';
import styles from './PostStyle';

class BodyPost extends Component{
    render(){
        return(
            <View >
            <ScrollView
             horizontal={true}
             pagingEnabled={true}
             showsHorizontalScrollIndicator={true}
             >
                <View>
                    <Image source={{uri:this.props.item.stories1}}
                    style={styles.body}/>
                </View>
                <View>
                    <Image source={{uri:this.props.item.stories2}}
                    style={styles.body}/>
                </View>
                <View>
                    <Image source={{uri:this.props.item.stories3}}
                    style={styles.body}/>
                </View>
            </ScrollView>
            </View>    
        )
    }
    
}
export default BodyPost;