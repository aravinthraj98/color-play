import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

function Scorescreen({ route, navigation }) {
  const [score, isscore] = useState(false);
  const [scored, setScored] = useState(0);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'lightblue',
      }}
    >
      <>
        {route.params ? (
          <>
            <Text style={{ fontWeight: 'bold', color: 'green' }}>
              Last Completed game Score:
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
              {route.params.score}
            </Text>
          </>
        ) : (
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>
            play now!
          </Text>
        )}
      </>
      <View style={{ width: 150, margin: 9 }}>
        <Button title='START' onPress={() => navigation.navigate('play')} />
      </View>
    </View>
  );
}

export default Scorescreen;
