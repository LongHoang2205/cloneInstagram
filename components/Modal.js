import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {StyleSheet,Text} from 'react-native';

class PostModal extends Component{
    showModal=()=>{
        this.refs.modal.open();
    }
    render(){
        return(
            <Modal 
            style={{width:200,height:200}}
                ref={'modal'}
                position='center '
                backdrop={true}
                onClosed={()=>{
                    alert('close')
                }
                }
            >
                <Text>This is Modal</Text>
            </Modal>
        );
    }
}
export default PostModal;