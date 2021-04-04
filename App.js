import React from 'react';
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs'
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Add from './components/pages/Add';
import Heart from './components/pages/Heart';
import Profile from './components/pages/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import styles from './components/Footer/FooterStyle';



const Tab=createBottomTabNavigator();

const App=()=>{
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                     name='Home' 
                     component={Home}
                     options={{
                        tabBarLabel:'',
                        tabBarIcon:()=> <Icon1 name="home" size={25} style={styles.footerIcon}/>,
                     }}
                     />
                <Tab.Screen 
                    name='Search' 
                    component={Search}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:()=><Icon2 name="search" size={25} style={styles.footerIcon}/>
                     }}
                    />
                <Tab.Screen 
                    name='Add' 
                    component={Add}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:()=><Icon name="plus-square-o" size={25} style={styles.footerIcon}/> ,
                     }}
                    />
                <Tab.Screen 
                    name='Heart' 
                    component={Heart}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:()=><Icon name="heart-o" size={25} style={styles.footerIcon}/> 
                     }}
                    />
                <Tab.Screen 
                    name='Profile' 
                    component={Profile}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:()=><Icon3 name="person-outline" size={25} style={styles.footerIcon}/>  
                     }}
                    />
                
            </Tab.Navigator>
        </NavigationContainer> 
    )
}

export default App;


