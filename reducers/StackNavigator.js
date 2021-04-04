import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import App from '../App';

import Home from '../components/pages/Home';
import Search from '../components/pages/Search';

import {HomeScreen,SearchScreen} from '../screensName';

const app= StackNavigator({
    HomeScreen:{
        screen:Home,
    },
    SearchScreen:{
        screen:Search
    }
});

AppRegistry.registerComponent('cloneInstagram',()=>app)