import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// 네비게이션 구조 & 상태 관리 (모든 네비게이션 구조는 이 태크 아래 들어가야한다.)
import { createStackNavigator } from '@react-navigation/stack'; //
import HomeScreen from './src/home';

import LoginScreen from './src/login';
import AdminScreen from './src/admin';
import ScanScreen from './src/QRCodeScanner';
import QRCodeGenerator from './src/QRCodeGenerator';
import SnsGoogleLogin from './src/GoogleLogin';
import NoticeBoard from './src/NoticeBoard';
import NoticeView from './src/NoticeArticle';
import AppleSignIn from './src/appleLogin';

import statisticalStatus from './src/statisticalStatus';
import infoUser from './src/infoUser';
import infoIpark from './src/infoIpark';

const Stack = createStackNavigator();
// Screen이라는 프로퍼티를 리턴할때 스크린 컴포넌트를 명시해주는데 네비게이션 props을 각각의 스크린 컴포넌트에 넘겨주게 된다.
// 따라서 this.props.navigation을 사용가능하게 해준다.

// 스크린에서 스크린으로 데이터를 보내는 것 : 파라미터를 루트로 패싱한다.
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#A33B39',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="admin" component={AdminScreen} />
        {/* <Stack.Screen name="ScanScreen" component={ScanScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }}/>
        <Stack.Screen name="NoticeBoard" component={NoticeBoard} options={{ title: '공지사항' }}/>
        <Stack.Screen name="NoticeView" component={NoticeView} options={{title: ''}}/>
        <Stack.Screen name="QRscan" component={ScanScreen} />
        <Stack.Screen name="QRGenerate" component={QRCodeGenerator} options={{title: 'QR출입'}}/>
        <Stack.Screen name="GoogleSign" component={SnsGoogleLogin} />
        <Stack.Screen name="appleLogin" component={AppleSignIn} />

        <Stack.Screen name="statisticalStatus" component={statisticalStatus} options={{title: '통계현황'}}/>
        <Stack.Screen name="infoUser" component={infoUser} options={{title: '내정보'}}/>
        <Stack.Screen name="infoIpark" component={infoIpark} options={{title: '아이파크정보'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
