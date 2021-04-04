import React, { Component } from 'react';
import {View,Image} from 'react-native';
import styles from './HeaderStyle';

class InsMessLogo extends Component{
    render(){
        const {insMess}=this.props;
        return(
            <Image source={insMess} style={styles.insMess}/>
        )
    }
}
export default InsMessLogo;