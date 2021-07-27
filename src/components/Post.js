import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

function Post({post, onOpen}) {
  const pressHandler = () => {
    onOpen(post);
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={pressHandler}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{uri: post.img}}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{post.date}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
});

export default Post;
