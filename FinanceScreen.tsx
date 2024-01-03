import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from './hooks';
import {useEffect} from 'react';
import {
  salesState,
  getVaxSales,
  getVaxSalesToday,
  getVaxBestsellers,
  getCarelineSales,
  getCarelineSalesToday,
  getCarelineBestsellers,
  getExcelData,
} from './features/salesSlice';

export default function FinanceScreen() {
  const dispatch = useAppDispatch();

  const token: string = useAppSelector((state: any) => state.tokenStore.token);
  const salesData: salesState = useAppSelector((state: any) => state.sales);

  useEffect(() => {
    if (!salesData.hasVaxData) {
      dispatch(getVaxSales(token));
    }
    if (!salesData.hasVaxDataToday) {
      dispatch(getVaxSalesToday(token));
    }
    if (!salesData.hasVaxBestsellers) {
      dispatch(getVaxBestsellers(token));
    }

    if (!salesData.hasCarelineData) {
      dispatch(getCarelineSales(token));
    }
    if (!salesData.hasCarelineDataToday) {
      dispatch(getCarelineSalesToday(token));
    }
    if (!salesData.hasCarelineBestsellers) {
      dispatch(getCarelineBestsellers(token));
    }
    if (!salesData.hasExcelData) {
      dispatch(getExcelData(token));
    }
  }, [salesData, token, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.usersBlock} />
        <View style={styles.conversionsBlock} />
        <View style={styles.salesBlock} />
        <View style={styles.ordersBlock} />
      </View>
      <View style={styles.topRow}>
        <View style={styles.vaxPerformance}>
          <Text style={{color: 'black'}}>Placeholder text</Text>
        </View>
        <View style={styles.vaxGraphs} />
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.carelinePerformance}>
          <Text style={{color: 'black'}}>PlaceHolder Text</Text>
        </View>
        <View style={styles.carelineGraphs} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    padding: 8,
    backgroundColor: '#F1EEEC',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  usersBlock: {
    flex: 1,
    backgroundColor: '#1A3E5D',
  },
  conversionsBlock: {
    flex: 1,
    backgroundColor: '#E5A44B',
  },
  salesBlock: {
    flex: 1,
    backgroundColor: '#475F64',
  },
  ordersBlock: {
    flex: 1,
    backgroundColor: '#1A3E5D',
  },
  topRow: {
    flex: 3,
    flexDirection: 'row',
    gap: 8,
  },
  bottomRow: {
    flex: 3,
    flexDirection: 'row',
    gap: 8,
  },
  vaxPerformance: {
    flex: 1,
    backgroundColor: 'white',
  },
  vaxGraphs: {
    flex: 1,
    backgroundColor: 'white',
  },
  carelinePerformance: {
    flex: 1,
    backgroundColor: 'white',
  },
  carelineGraphs: {
    flex: 1,
    backgroundColor: 'white',
  },
});
