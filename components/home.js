import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

function Home({ navigation }) {
  let timeout = 30000;
  const [color, setColor] = useState('white');
  const [colorWord, setColorWord] = useState('');
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [game, setGame] = useState(false);
  const colors = [
    'violet',
    'indigo',
    'blue',
    'green',
    'white',
    'yellow',
    'orange',
    'red',
    'black',
  ];
  const colorWords = [
    'violet',
    'red',
    'yellow',
    'black',
    'white',
    'indigo',
    'green',
    'blue',
    'orange',
  ];
  const backActionHandler = () => {
    Alert.alert('Alert!', 'End game without completing?', [
      {
        text: 'no',

        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
          navigation.navigate('home');
        },
      },
    ]);
    return true;
  };
  useEffect(() => {
    if (game) {
      navigation.navigate('home', { score: score });
    }
  }, [game]);
  // useEffect(() => {

  // }, [game]);

  useEffect(() => {
    setScore(0);

    let out = setTimeout(() => {
      if (!game) setGame(true);
    }, timeout);
    let int = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    newColor('', '');
    BackHandler.addEventListener('hardwareBackPress', backActionHandler);

    return () => {
      clearInterval(int);
      BackHandler.removeEventListener('hardwareBackPress', backActionHandler);
      clearTimeout(out);
    };

    // clear/remove event listener
  }, []);
  function newColor(chose, Answer) {
    if (chose == '' || Answer == '') {
    } else {
      if (chose == Answer) setScore((prevScore) => prevScore + 1);
    }

    let getColor = Math.floor(Math.random() * 9);
    let getcolorWord = Math.floor(Math.random() * 9);
    setColor(colors[getColor]);
    setColorWord(colorWords[getcolorWord]);
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          margin: '7%',
          flexDirection: 'row',
          alignContent: 'space-between',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: 5,
            borderRadius: 20,
            width: 100,
          }}
        >
          SCORE:{score}
        </Text>
        <Text>Time Left:{seconds}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          height: '40%',
        }}
      >
        <Text style={{ color: String(color), fontSize: 40 }}>{colorWord}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          scrollEnabled={false}
          numColumns={3}
          style={styles.List}
          data={colors}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[{ backgroundColor: item }, styles.ListItem]}
                onPress={() => newColor(item, color)}
              >
                <Text></Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  bottomContainer: {
    width: '99%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',

    position: 'absolute',
    bottom: 0,
    height: '60%',
    backgroundColor: 'whitesmoke',
  },
  List: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignContent: 'space-around',
  },
  ListItem: {
    flex: 1,
    // height: Dimensions.get('screen').height / 5.1,
    padding: '10%',
    paddingBottom: '24%',

    margin: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
