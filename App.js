import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const routeConfig = {
  Search: SearchScreen
};

const stackNavigatorConfig = {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
};

const navigator = createStackNavigator(routeConfig, stackNavigatorConfig);

export default createAppContainer(navigator);