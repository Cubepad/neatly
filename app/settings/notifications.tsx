import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, useTheme, Appbar, List, Switch, Surface } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NotificationsSettingsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content titleStyle={styles.appbarTitle} title="Notifications" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <Surface style={styles.settingSection}>
          <List.Item
            title="Enable Notifications"
            left={(props) => <List.Icon {...props} icon="bell-outline" />}
            titleStyle={{ fontFamily: "Inter_500Medium",}}
            descriptionStyle={{ fontFamily: "Inter_400Regular", }}
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={toggleNotifications}
              />
            )}
          />
        </Surface>
        {/* Add more notification settings here */}
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
