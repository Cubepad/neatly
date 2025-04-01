import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, useTheme, Appbar, List, Surface } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function DataStorageSettingsScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content titleStyle={styles.appbarTitle} title="Data & Storage" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <Surface style={styles.settingSection}>
          <List.Item
            title="Clear Cache"
            left={(props) => <List.Icon {...props} icon="delete-sweep-outline" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Clear Cache pressed')}
            titleStyle={{ fontFamily: "Inter_500Medium",}}
            descriptionStyle={{ fontFamily: "Inter_400Regular", }}
          />
          <List.Item
            title="Manage Downloads"
            left={(props) => <List.Icon {...props} icon="download-outline" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Manage Downloads pressed')}
            titleStyle={{ fontFamily: "Inter_500Medium",}}
            descriptionStyle={{ fontFamily: "Inter_400Regular", }}
          />
        </Surface>
        {/* Add more data and storage related settings here */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbarTitle: {

  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  settingSection: {
    marginVertical: 8,
    borderRadius: 12,
    elevation: 1,
    overflow: 'hidden',
  },
});
