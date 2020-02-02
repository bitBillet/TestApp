import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home'
import Fullsize from '../screens/Fullsize'


const RootStack = createStackNavigator({
    Home: HomeScreen,
    Fullpick: Fullsize
}, {
    initialRouteName: 'Home'
});
export default createAppContainer(RootStack);