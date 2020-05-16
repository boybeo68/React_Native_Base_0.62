import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthContextProvider from './redux/context/AuthContext';
import AuthNavigation from './navigations/app_navigation';

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
