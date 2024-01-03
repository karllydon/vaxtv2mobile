import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FinanceScreen from './FinanceScreen';
import DevelopmentScreen from './DevelopmentScreen';
import SiteStatusScreen from './SiteStatusScreen';

const Tab = createMaterialTopTabNavigator();

export default function Slides() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {display: 'none'},
        swipeEnabled: true,
        animationEnabled: true,
      }}>
      <Tab.Screen name="Finance" component={FinanceScreen} />
      <Tab.Screen name="Development" component={DevelopmentScreen} />
      <Tab.Screen name="Site" component={SiteStatusScreen} />
    </Tab.Navigator>
  );
}
