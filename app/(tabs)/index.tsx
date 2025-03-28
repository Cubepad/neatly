import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme, AnimatedFAB } from "react-native-paper";
import AppHeader from "@/src/components/AppHeader.tsx";
import NoteCard from "@/src/components/NoteCard";

export default function TabOneScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExtended, setIsExtended] = useState(true);
  const theme = useTheme();

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const onScroll = (event: any) => {
    const currentScrollPosition = Math.floor(event.nativeEvent.contentOffset.y) ?? 0;
    setIsExtended(currentScrollPosition <= 0);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppHeader />
      <ScrollView style={styles.container} onScroll={onScroll}>
        {Array.from({ length: 5 }).map((_, index) => (
          <NoteCard
            key={index}
            title="Workflow Project Concept"
            content="Discussed project timeline, assigned roles, and set next meeting date."
            lastEdited="2 days ago"
            tags={["Meet-20-Jul", "Workflow", "Figma"]}
          />
        ))}
      </ScrollView>
      <AnimatedFAB
        icon="plus"
        label="Create Note"
        extended={isExtended}
        style={styles.fab}
        onPress={() => {
          // Implement action when FAB is pressed
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
