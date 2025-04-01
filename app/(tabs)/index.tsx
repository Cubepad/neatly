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
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }} onScroll={onScroll}>
      {Array.from({ length: 5 }).map((_, index) => (
        <NoteCard
          key={index}
          title={
            [
              "Exploring AI in Everyday Life",
              "The Future of Wearable Tech",
              "Quantum Computing: Breaking Barriers",
              "Electric Vehicles and Sustainable Transport",
              "Exploring Smart Home Innovations",
            ][index]
          }
          content={
            [
              "Examined how AI is transforming industries like healthcare, transportation, and customer service. Highlighted the ethical concerns related to data privacy and bias.",
              "Discussed the latest innovations in wearable devices, from smartwatches to AR glasses. Explored how they are enhancing personal health monitoring and immersive experiences.",
              "Learned about how quantum computing could revolutionize data processing, encryption, and problem-solving. Explored current challenges in making it mainstream.",
              "Explored how EV technology is advancing, including battery improvements and charging infrastructure. Discussed the environmental impact and challenges in adoption.",
              "Looked into how smart home devices are becoming more interconnected, from voice assistants to automated lighting and security systems. Analyzed potential privacy risks.",
            ][index]
          }
          lastEdited={
            ["3 days ago", "1 week ago", "4 days ago", "2 days ago", "5 days ago"][index]
          }
          tags={
            [
              ["AI", "Technology Trends", "Ethics"],
              ["Wearable Tech", "AR", "Health Monitoring"],
              ["Quantum Computing", "Encryption", "Innovation"],
              ["Electric Vehicles", "Sustainability", "Battery Tech"],
              ["Smart Home", "IoT", "Privacy"],
            ][index]
          }
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
