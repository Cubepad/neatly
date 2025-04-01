import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  useTheme,
  List,
  Appbar,

  Text,
  Searchbar, 
  Surface,  
} from 'react-native-paper';
import { useRouter } from 'expo-router';

export const screenOptions = {
  headerShown: false,
};

export default function SettingsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState(''); // State for Searchbar

  // --- Styles defined inline using theme for better theme integration ---
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background, // Use theme background
    },
    appbar: {
      // elevation: 0, // Optional: Set elevation to 0 if you want a flat app bar like some MD3 styles
    },
    appbarTitle: {
      fontSize: 22
    },
    // Container for the Searchbar to apply padding
    searchbarContainer: {
      padding: 16,
      paddingTop: 8, // Reduce top padding slightly
    },
    searchbar: {
      // Use elevation level 1 or 2 for slight lift, matching MD3 surface behaviour
      backgroundColor: theme.colors.elevation.level2,
    },
    scrollView: {
      flex: 1,
    },
    scrollViewContent: {
      paddingBottom: 16, // Add padding at the bottom
    },
    listSection: {
      marginTop: 0, // Remove default Section margin top
      marginBottom: 0, // Remove default Section margin bottom
      paddingHorizontal: 16, // Add horizontal padding to the section container
    },
    subheader: {
      // Subheader text color using theme.colors.primary is common in MD3
      color: theme.colors.primary,
      paddingHorizontal: 16, // Indent subheader text slightly within the section padding
      paddingVertical: 12, // Adjust vertical padding
      marginTop: 8, // Space above subheader
      // Let the Text variant handle font weight/size
    },
    // Style for the Surface wrapping each List.Item
    surface: {
      marginVertical: 6, // Space between items
      borderRadius: 12, // MD3 uses larger border radii (e.g., 12dp)
      overflow: 'hidden', // Ensure no overflow from the rounded corners
      // elevation: 1, // Subtle elevation for the items
    },
    listItem: {
      paddingVertical: 8, // Adjust padding inside the item if needed
      fontFamily: "Inter_500Medium", 
    },
  });


  return (
    <View style={styles.container}>
      <Appbar.Header
        style={styles.appbar}
      >
        <Appbar.BackAction
           iconColor={theme.colors.onSurface} 
           onPress={() => router.back()}
        />
        <Appbar.Content
           title="Settings"
           titleStyle={[styles.appbarTitle, { color: theme.colors.onSurface }]} 
        />
      </Appbar.Header>

      {/* Search Bar Section - Mimics the style, non-functional for now */}
      <View style={styles.searchbarContainer}>
        <Searchbar
          placeholder="Search settings"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Preferences Section */}
        <List.Section style={styles.listSection}>
          <List.Subheader style={styles.subheader}>
             {/* Use Text variant for consistent MD3 typography */}
            <Text variant="titleSmall" style={{ color: theme.colors.primary }}>Preferences</Text>
          </List.Subheader>

          <Surface style={styles.surface} mode="elevated" elevation={1}>
            <List.Item
              title="Appearance"
              description="Customize theme and display"
              left={props => <List.Icon {...props} icon="palette-outline" color={theme.colors.onSurfaceVariant}/>}
              // Removed right chevron icon to match image style
              onPress={() => router.push('/settings/appearance')}
              style={styles.listItem}
              titleStyle={{ fontFamily: "Inter_500Medium",}}
              descriptionStyle={{ fontFamily: "Inter_400Regular", }}
            />
          </Surface>

          <Surface style={styles.surface} mode="elevated" elevation={1}>
            <List.Item
              title="Notifications"
              description="Message, group & call tones"
              left={props => <List.Icon {...props} icon="bell-outline" color={theme.colors.onSurfaceVariant}/>}
              onPress={() => router.push('/settings/notifications')}
              style={styles.listItem}
              titleStyle={{ fontFamily: "Inter_500Medium",}}
              descriptionStyle={{ fontFamily: "Inter_400Regular", }}
            />
          </Surface>
        </List.Section>

        {/* Data Section */}
        <List.Section style={styles.listSection}>
          <List.Subheader style={styles.subheader}>
             <Text variant="titleSmall" style={{ color: theme.colors.primary }}>Data</Text>
          </List.Subheader>

          <Surface style={styles.surface} mode="elevated" elevation={1}>
            <List.Item
              title="Data & Storage"
              description="Network usage, auto-download"
              left={props => <List.Icon {...props} icon="database-outline" color={theme.colors.onSurfaceVariant}/>}
              onPress={() => router.push('/settings/data-storage')}
              style={styles.listItem}
              titleStyle={{ fontFamily: "Inter_500Medium",}}
              descriptionStyle={{ fontFamily: "Inter_400Regular", }}
            />
          </Surface>
        </List.Section>

        {/* Support Section */}
        <List.Section style={styles.listSection}>
           <List.Subheader style={styles.subheader}>
            <Text variant="titleSmall" style={{ color: theme.colors.primary }}>Support</Text>
          </List.Subheader>

          <Surface style={styles.surface} mode="elevated" elevation={1}>
            <List.Item
              title="About"
              description="App version, licenses, terms"
              left={props => <List.Icon {...props} icon="information-outline" color={theme.colors.onSurfaceVariant}/>}
              onPress={() => router.push('/settings/about')}
              style={styles.listItem}
              titleStyle={{ fontFamily: "Inter_500Medium",}}
              descriptionStyle={{ fontFamily: "Inter_400Regular", }}
            />
          </Surface>
        </List.Section>
      </ScrollView>
    </View>
  );
}