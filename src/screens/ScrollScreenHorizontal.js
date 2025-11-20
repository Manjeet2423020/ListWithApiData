import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window'); // explain it

const images = [
  require('./assets/img1.jpeg'),
  require('./assets/img2.png'),
  require('./assets/img3.jpeg'),
];
// main component

const ScrollScreenHorizontal = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView
          style={styles.scrollView}
          horizontal={true} // horizontal scrolling on kerne k liye
          pagingEnabled={true} //image ko snap k liye (paging ko)
          contentContainerStyle={styles.content} // content styling
        >
          {images.map((imgSrc, index) => (
            <View key={index} style={styles.imageWrap}>
              <Image
                source={{ imgSrc }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
        <ScrollView
          style={styles.textScroll}
          contentContainerStyle={{ padding: 10 }}
        >
          <Text style={styles.text}>
            Keep in mind that ScrollViews must have a bounded height in order to
            work, since they contain unbounded-height children into a bounded
            container .In order to bound the height of a ScrollView, either set
            the height of the view directly or make sure all parent views have
            bounded height. Forgetting to transfer down the view stack can lead
            to errors here, which the element inspector makes quick to debug.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    height: 220,
    backgroundColor: 'orange',
  },
  content: {
    alignItems: 'center',
  },
  imageWrap: {
    width: SCREEN_WIDTH,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: '95%',
    borderRadius: 8,
  },
  textScroll: {
    flex: 1,
  },

  text: {
    fontSize: 16,
    padding: 10,
  },
});

export default ScrollScreenHorizontal;
