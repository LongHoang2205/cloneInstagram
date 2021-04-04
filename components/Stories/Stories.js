import React, { Component } from 'react';
import {View,Image,FlatList,Text} from 'react-native';
import styles from './StoriesStyle';
import StoriesItem from './StoriesItem'
import {StoriesData}  from '../StoriesData';


// class StoriesItem extends Component{
//     render(){
//         return(
//             <View>
//             <Image source={{uri:this.props.item.avatar}}
//             style={styles.img}/>
//             <Text style={styles.txt}>{this.props.item.name}</Text>
//             </View>    
//         )
//     }
    
// }

class Stories extends Component{
    render(){
        // const mapStories=data.map(item=>
        //     <StoriesItem stories={item} index={index}>

        //     </StoriesItem>);
        return(
            <View style={{height:120}}>
                <FlatList 
                horizontal={true}
                data={StoriesData}
                renderItem={({item,index})=>{
                    return(
                        <StoriesItem item={item} index={index} parentFlatList={this}>

                        </StoriesItem>
                    )
                }}
                >
               
                </FlatList>
               
            </View>
        );
    }
}
export default Stories;