/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import { Text, Animated } from 'react-native';

import Header from './components/Header';

const App: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Header y={scrollY} x={scrollX} />
      <Animated.ScrollView
        contentContainerStyle={{
          marginTop: 400,
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY, x: scrollX } } },
        ])}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
        <Text style={{ color: '#000' }}>haha</Text>
      </Animated.ScrollView>
    </>
  );
};

export default App;
