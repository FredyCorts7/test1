/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  StatusBar,
  Button,
  View,
  Image,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useFetchApi} from './hooks/useFetchApi';
import Item from './components/Item';

const App = () => {
  const {data: pokemons, loading} = useFetchApi();
  const [showImage, setShowImage] = useState(false);

  const changeStateImage = () => {
    setShowImage(!showImage);
  };

  const renderItem = ({item}) => <Item name={item.name} />;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.wrapperLogin}>
            <Text>Nombre de usuario:</Text>
            <TextInput textContentType="emailAddress"></TextInput>
            <Text>Contraseña:</Text>
            <TextInput textContentType="password"></TextInput>
            <Button
              onPress={changeStateImage}
              title="Inicia Sesión"
              color="#333"></Button>
            {showImage && (
              <Image
                style={styles.sizeImage}
                source={{
                  uri:
                    'https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg',
                }}></Image>
            )}
          </View>
        </ScrollView>
        <FlatList
          data={pokemons}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  wrapperLogin: {
    margin: 30,
  },
  sizeImage: {
    width: 250,
    height: 150,
  },
});

export default App;
