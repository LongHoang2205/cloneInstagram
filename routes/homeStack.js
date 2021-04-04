import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import Home from '../components/pages/Home';
import Search from '../components/pages/Search'

const screens={
    Home :{
        screen:Home
    },
    Search:{
        screen:Search
    }
}

const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);