import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {useAppDispatch, useAppSelector} from './hooks';
import {getStatusScreenshot} from './features/statsSlice';
import {useEffect} from 'react';

export default function SiteStatusScreen() {
  const dispatch = useAppDispatch();
  const token: string = useAppSelector((state: any) => state.tokenStore.token);
  const screenShot: any = useAppSelector(
    (state: any) => state.stats.screenshot,
  );

  useEffect(() => {
    dispatch(getStatusScreenshot(token));
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000000'}}>Status!</Text>
      {/* <Image style={{width: 50, height: 50}} source={{screenShot}} /> */}
    </View>
  );
}
