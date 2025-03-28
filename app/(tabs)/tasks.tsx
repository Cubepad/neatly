import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme, AnimatedFAB } from "react-native-paper";
import AppHeader from "@/src/components/AppHeader.tsx";
import TaskCard from "@/src/components/TaskCard";

export default function TasksScreen() {
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
          <TaskCard
            key={index}
            title={`Task ${index + 1}`}
            description="Complete the assigned work and review progress."
            dueDate="Tomorrow"
            priority={index % 2 === 0 ? "High" : "Normal"} // (Remove this line since priority is not a defined prop)
            completed={false} // Default value for now
            onToggleComplete={() => {}} // Placeholder function
            onDelete={() => {}} // Placeholder function
          />
        ))}

      </ScrollView>
      <AnimatedFAB
        icon="plus"
        label="New Task"
        extended={isExtended}
        style={styles.fab}
        onPress={() => {
          // Navigate to add new task screen
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
