import {Button, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../redux/context/AuthContext';

function HomeScreen() {
  const {authContext} = useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={authContext.signOut} />
    </View>
  );
}
export default HomeScreen;
