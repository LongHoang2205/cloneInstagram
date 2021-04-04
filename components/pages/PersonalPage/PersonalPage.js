import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import {StoriesData}  from '../../StoriesData'
import { ScrollView } from 'react-native-gesture-handler';

class PersonalPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.head}>
                    <Image source={{uri:this.props.item.avatar}}
                            style={styles.img}/>
                    <Text>{this.props.item.posts}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default PersonalPage;