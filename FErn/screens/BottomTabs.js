import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feather from 'react-native-vector-icons/Feather'
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator()
  const renderTabBarHome = ({ focused,}) => (
    <View 
      style={{
          alignItems:'center',
          justifyContent:'center',
          width : 60,
          height : 60,
        }}>
        <Feather  
          name='home'
          color={focused ? 'black' : 'grey'}
          size={20}
          />
        <Text>홈</Text>
    </View>
  )
  const renderTabBarSetting = ({ focused,}) => (
    <View 
      style={{
          alignItems:'center',
          justifyContent:'center',
          width : 60,
          height : 60,
        }}>
        <Feather  
          name='user'
          color={focused ? 'black' : 'grey'}
          size={20}
          />
        <Text>설정</Text>
    </View>
  )
  return (
      <Tab.Navigator
        initialRouteName='홈'
        screenOptions={{
          tabBarStyle: { 
            borderTopWidth:1,
            // borderTopColor:COLORS.topNavLine,
            // backgroundColor: COLORS.bottomNav,
            // height: Platform.OS==='ios'? isIphoneX() ? 80 : 56 :64,
          },
          headerShown:false
        }}
        tabBarOptions={{
            showLabel:false,
            labelStyle :{
                //color : COLORS.font2,
                alignItems:'center',
            }
          }}>
          <Tab.Screen
              name="홈"
              component={HomeScreen}
              options={{
                  tabBarIcon:renderTabBarHome,
              }}/>
          <Tab.Screen
              name="세팅"
              component={SettingScreen}
              options={{
                  tabBarIcon:renderTabBarSetting,
              }}/>
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
