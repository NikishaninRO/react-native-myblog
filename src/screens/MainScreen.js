import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Post from '../components/Post';
import {DATA} from '../data';

function MainScreen({navigation}) {
  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id, date: post.date});
  };

  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default MainScreen;
