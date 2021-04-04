import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import {InsLogo,InsMessLogo,Post,Footer, Page,TabBar} from '../../components' 
import styles from '../../AppStyles'


class Home extends Component{       
    render(){
        return(
            <SafeAreaView style={styles.main}>
                <View style={styles.header}>
                    <InsLogo ins={require('./images/ins.png')}/>
                    <InsMessLogo insMess={require('./images/insmess.png')}/>
                </View>
                <View style={{flex:1}}>
                    <Post />
                </View >
                {/* <View style={styles.footer}>
                <Footer />
                </View> */}
            </SafeAreaView>
        );
    }
}
export default Home;




