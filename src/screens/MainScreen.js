import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function MainScreen({navigation}) {
  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button title="Go to Post" onPress={() => navigation.push('Post')} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
