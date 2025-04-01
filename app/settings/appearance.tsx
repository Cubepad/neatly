import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, useTheme, Appbar, List, Surface, Dialog, Portal, Button, RadioButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

export const screenOptions = {
  headerShown: false,
};

export default function AppearanceSettingsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [themeSelection, setThemeSelection] = useState<string>('system');
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const toggleDialog = () => setDialogVisible(!dialogVisible);
  const handleThemeChange = (value: string) => {
    setThemeSelection(value);
    toggleDialog();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>  
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content titleStyle={styles.appbarTitle} title="Appearance" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <Surface style={styles.settingSection}>
          <List.Item
            title="Theme"
            description={
              themeSelection === 'system' ? 'System Default' : themeSelection === 'light' ? 'Light Mode' : 'Dark Mode'
            }
            titleStyle={{ fontFamily: 'Inter_500Medium' }}
            descriptionStyle={{ fontFamily: 'Inter_400Regular' }}
            left={(props) => <List.Icon {...props} icon="brightness-6" />}
            onPress={toggleDialog}
          />
        </Surface>

        <Portal>
          <Dialog visible={dialogVisible} onDismiss={toggleDialog}>
            <Dialog.Title>Choose Theme</Dialog.Title>
            <Dialog.Content>
              <RadioButton.Group onValueChange={handleThemeChange} value={themeSelection}>
                <RadioButton.Item label="System Default" value="system" />
                <RadioButton.Item label="Light Mode" value="light" />
                <RadioButton.Item label="Dark Mode" value="dark" />
              </RadioButton.Group>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={toggleDialog}>Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbarTitle: {},
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
