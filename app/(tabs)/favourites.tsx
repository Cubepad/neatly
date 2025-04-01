import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme, AnimatedFAB } from "react-native-paper";
import AppHeader from "@/src/components/AppHeader.tsx";
import NoteCard from "@/src/components/NoteCard";

const FavoritesScreen: React.FC = () => {
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
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 10 }} onScroll={onScroll}>
        {Array.from({ length: 5 }).map((_, index) => (
          <NoteCard
            key={index}
            title="Design Concept"
            content="Updated favorite design layout for the app"
            lastEdited="1 day ago"
            tags={["Design", "UI", "Figma"]}
          />
        ))}
      </ScrollView>
      <AnimatedFAB
        icon="plus"
        label="Create Note"
        extended={isExtended}
        style={styles.fab}
        onPress={() => {
          // Implement action when FAB is pressed (e.g., open a modal to create a note)
        }}
      />
    </View>
  );
};

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

export default FavoritesScreen;
