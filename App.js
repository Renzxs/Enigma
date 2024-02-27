import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigation from './app/navigations/LoginStackNavigation';
import TabNavigation from './app/navigations/TabNavigation';
import HomeNavigation from './app/navigations/HomeNavigation';


export default function App() {
  return (
      <NavigationContainer >
        {/* <LoginStackNavigation /> */}
        <HomeNavigation />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
