import { TabNavigator } from 'react-navigation';
 
import Home from "./src/components/home/home";
import Info from "./src/components/info/info";
import Photo from "./src/components/photo/photo";
 
const App = TabNavigator({
  Home: { 
    screen: Home,
     navigationOptions: {
      tabBarLabel: 'Home',
    }
  },
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: 'Infos',
    }
  },
  Photo: {
    screen: Photo,
    navigationOptions: {
      tabBarLabel: 'Photos'
    }
  }
});
 
module.exports = App;