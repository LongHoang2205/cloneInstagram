import React, { Component } from 'react';
import { Text, View ,Image} from 'react-native';
import styles from './StoriesStyle';

class StoriesOfMe extends Component{
    render(){
        return(
            <View>
                <Image source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fchuoichin.com%2Fstt-facebook%2Favatar-den-trang-ve-buon-tam-trang-cho-facebook-zalo-co-y-nghia-moi-nhat-2019%2F&psig=AOvVaw1xzMx_EPmcEeZf5qxHIMYu&ust=1616691025648000&source=images&cd=vfe&ved=2ahUKEwiP89DDscnvAhXPDd4KHQANC-kQjRx6BAgAEAc'}}
                    style={styles.img}
                />
                <Text style={styles.txt}>Stories of me</Text>
            </View>
        );
    }
}
export default StoriesOfMe;