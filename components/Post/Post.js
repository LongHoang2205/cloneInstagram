import React, { Component } from 'react';
import {View,Image,FlatList,Text,ScrollView ,TouchableHighlight}from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import styles from './PostStyle';
import HeadPost from './HeadPost'
import BodyPost from './BodyPost'
import FooterPost from './FooterPost'
import {StoriesData}  from '../StoriesData';
import Stories from '../Stories/Stories';
import Modal from '../Modal';
import Footer from '../Footer/Footer'
// import Icon from 'react-native-vector-icons/Entypo'


class Post extends Component{
    render(){
        return(
            <View >
                <ScrollView>
                    <Stories />
                <FlatList
                data={StoriesData}
                renderItem={({item,index})=>{
                    return(
                        <View>
                        <HeadPost item={item} index={index} parentFlatList={this}>
                        </HeadPost>
                        <BodyPost item={item} index={index} parentFlatList={this}>
                        </BodyPost>
                        <FooterPost item={item} index={index} parentFlatList={this}>
                        </FooterPost>
                        </View>
                    )
                }}
                >
               
                </FlatList>
               
                </ScrollView>
                <Modal ref={'modal'} parentFlatList={this}>

                </Modal>
            </View>
        );
    }
}
export default Post;