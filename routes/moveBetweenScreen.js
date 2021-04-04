import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Home from '../components/pages/Home';
import Search from '../components/pages/Search';

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Search,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}