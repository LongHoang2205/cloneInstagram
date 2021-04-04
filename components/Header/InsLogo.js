import React,{Component} from 'react';
import {View,Image} from 'react-native';
import styles from './HeaderStyle';

class InsLogo extends Component{
    render(){
        const {ins}=this.props;
        return(
                <Image source={ins} style={styles.ins}/>
                
        )
    }
}
export default InsLogo;