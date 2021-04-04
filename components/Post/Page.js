import React, { Component } from 'react';
import { Image,View,Text, Touchable, TouchableHighlight,ScrollView,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import styles from './PostStyle';
import Modal from '../Modal';
import Stories from '../Stories/Stories';
import {StoriesData}  from '../StoriesData';

class Page extends Component{
    PressButton=()=>{
         this.refs.modal.showModal();
         //alert('modal')
    }
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
                            <View style={styles.head}>
                {/* <View style={styles.left}>
                <Image source={{uri:this.props.item.avatar}}
            style={styles.icon}/>
            <Text style={styles.txtIcon}>{this.props.item.name}</Text>
                </View> */}
            <View style={{marginLeft:250}}>
            <TouchableHighlight
                onPress={this.PressButton}
            >
            <Icon name="dots-three-horizontal" size={20} />
            </TouchableHighlight>
            </View>
                            
            </View>
            {/* <View >
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
            </View>     */}

            <View style={styles.footerPost}>
            <Icon name="heart-o"  size={25} style={styles.footer}/>
            <Icon name="comment-o"  size={25} style={styles.footer}/>
            <Icon name="bookmark-o"  size={25} style={{marginLeft:250}}/>
            </View> 
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
export default Page;