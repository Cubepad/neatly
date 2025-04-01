import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, useTheme, Appbar, List, Surface } from 'react-native-paper';
import { useRouter } from 'expo-router';

export const screenOptions = {
  headerShown: false,
};

export default function AboutSettingsScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content titleStyle={styles.appbarTitle} title="About" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <Surface style={styles.settingSection}>
          <List.Item
            title="App Version"
            description="1.0.0"
            left={(props) => <List.Icon {...props} icon="information-outline" />}
            right={() => <Text>1.0.0</Text>} 
            titleStyle={{ fontFamily: "Inter_500Medium",}}
            descriptionStyle={{ fontFamily: "Inter_400Regular", }}
          />
          <List.Item
            title="Check for Updates"
            left={(props) => <List.Icon {...props} icon="update" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Check for Updates pressed')}
            titleStyle={{ fontFamily: "Inter_500Medium",}}
            descriptionStyle={{ fontFamily: "Inter_400Regular", }}
          />
        </Surface>
        {/* Add more about related settings here */}
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
