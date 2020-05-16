import React, {useState, useContext} from 'react';
import {Button, TextInput, View} from 'react-native';
import {AuthContext} from '../redux/context/AuthContext';

export function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {authContext} = useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => authContext.signIn({username, password})} />
    </View>
  );
}
