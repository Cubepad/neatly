import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const ArchiveScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text variant="headlineMedium" style={{ color: theme.colors.primary }}>
          Archived Notes & Tasks
        </Text>
        {/* Archived items will be listed here */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    alignItems: "center",
    paddingBottom: 20,
  },
});

export default ArchiveScreen;
