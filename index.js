/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/drawer/DrawerNavigator';
import BottomRabNavigator from './src/navigation/bottom-tabs/BottomRabNavigator';
// import AllFlatlist from './src/screens/AllFlatlist';
import SimpleFlatList from './src/screens/SimpleFlatList';
import ScrollScreenView from './src/screens/ScrollScreenView';
import ScrollScreenHorizontal from './src/screens/ScrollScreenHorizontal';
import NormalApicall from './src/screens/NormalApicall';

// const Root = () => (
//   <GestureHandlerRootView style={{ flex: 1 }}>
//     <AllFlatlist />
//   </GestureHandlerRootView>
// );

AppRegistry.registerComponent(appName, () => NormalApicall);
