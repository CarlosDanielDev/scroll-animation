/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, SafeAreaView } from 'react-native';

interface HeaderProps {
  y: Animated.Value;
  x: Animated.Value;
}

const Header: React.FC<HeaderProps> = ({ y }) => {
  return (
    <SafeAreaView>
      <Animated.View
        style={{
          width: 400,
          height: 300,
          marginTop: 25,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: y.interpolate({
            inputRange: [0, 100, 200],
            outputRange: ['#ff0', '#f00', '#00f'],
          }),
          transform: [
            {
              translateY: y.interpolate({
                inputRange: [0, 200],
                outputRange: [0, -200],
              }),
            },
          ],
        }}>
        <Animated.Text
          style={{
            color: y.interpolate({
              inputRange: [0, 100],
              outputRange: ['#000', '#fff'],
            }),
            fontSize: y.interpolate({
              inputRange: [0, 100, 200],
              outputRange: [50, 30, 50],
            }),
            opacity: y.interpolate({
              inputRange: [0, 100, 200],
              outputRange: [1, 0, 1],
            }),
          }}>
          Teste
        </Animated.Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Header;
