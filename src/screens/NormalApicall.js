import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const NormalApicall = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    //async function is liye use kiya gya kyo ki esmay await use hoga fetch api k time.
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url); // large data ko call kerne may time lgta hai ess liye await ka use kiya gya hai.
    result = await result.json(); // api data ko json format may convert kiya ja rha hai.
    setData(result); // setData k through data update ho jaye ga state ka.
  };

  useEffect(() => {
    // useEffect to use render application one time using square bracket [] .
    getAPIData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 20, color: 'white' }}>NormalApicall</Text>
        {data ? (
          <View>
            <Text
              style={{ fontSize: 20, color: 'black', backgroundColor: 'pink' }}
            >
              {data.id}
            </Text>
            <Text
              style={{ fontSize: 20, color: 'black', backgroundColor: 'blue' }}
            >
              {' '}
              {data.title}
            </Text>
            <Text style={{ fontSize: 20, color: 'white' }}> {data.body}</Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default NormalApicall;
