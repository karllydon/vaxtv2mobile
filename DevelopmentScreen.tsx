import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from './hooks';
import {useEffect} from 'react';
import {
  getJiraSprintDetails,
  getJiraBacklogDetails,
  getJiraBurndownDetails,
  getJiraDevDetails,
  getJiraDtnDetails,
  jiraState,
} from './features/jiraSlice';

export default function DevelopmentScreen() {
  const dispatch = useAppDispatch();

  const token: string = useAppSelector((state: any) => state.tokenStore.token);
  const jiraData: jiraState = useAppSelector((state: any) => state.jira);

  useEffect(() => {
    if (!jiraData.hasSprintData) {
      dispatch(getJiraSprintDetails(token));
    }

    if (!jiraData.hasBurndownData) {
      dispatch(getJiraBurndownDetails(token));
    }

    if (!jiraData.hasBacklogData) {
      dispatch(getJiraBacklogDetails(token));
    }

    if (!jiraData.hasDevData) {
      dispatch(getJiraDevDetails(token));
    }
    if (!jiraData.hasDtnData) {
      dispatch(getJiraDtnDetails(token));
    }
  }, [jiraData, dispatch, token]);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.sprintInfo}>
          <Text>
            {jiraData.hasSprintData && JSON.stringify(jiraData.sprintData.data)}
          </Text>
        </View>
        <View style={styles.devTickets}>
          <Text style={styles.title}> Vax Open Tickets</Text>
          <Text>
            {jiraData.hasDevData &&
              JSON.stringify(
                jiraData.devData.data.map((entry: any) => {
                  return {label: entry.name, value: entry.total};
                }),
              )}
          </Text>
        </View>
        <View style={styles.dtnTickets}>
          <Text style={styles.title}> DTN Open Tickets</Text>
          <Text>
            {jiraData.hasDtnData &&
              JSON.stringify(
                jiraData.dtnData.data.map((entry: any) => {
                  return {label: entry.name, value: entry.total};
                }),
              )}
          </Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Text>
          {jiraData.hasBurndownData &&
            JSON.stringify(jiraData.burndownData.data)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 12,
    padding: 12,
    backgroundColor: '#F1EEEC',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  bottomRow: {
    flex: 1,
    backgroundColor: 'white',
  },
  sprintInfo: {
    flex: 1,
    backgroundColor: 'white',
  },
  devTickets: {
    flex: 2,
    backgroundColor: 'white',
  },
  dtnTickets: {
    flex: 2,
    backgroundColor: 'white',
  },
  title: {
    color: '#000000',
  },
});
