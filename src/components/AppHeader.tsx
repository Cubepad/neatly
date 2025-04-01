import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Appbar, Menu, useTheme, Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const AppHeader: React.FC = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const openSettings = () => {
    closeMenu();
    router.push("/settings")
  };

  const onSearchIconPress = () => setIsSearching(true);

  if (isSearching) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <StatusBar
          barStyle={theme.dark ? "light-content" : "dark-content"}
          backgroundColor={theme.colors.surface}
        />
        <Searchbar
          placeholder="Search"
          icon="arrow-left"
          onIconPress={() => setIsSearching(false)}
          onChangeText={setSearchQuery}
          value={searchQuery}
          autoFocus
          style={styles.searchBar}
        />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: theme.colors.surface }}>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.surface}
      />
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Neatly" titleStyle={styles.title} />
        <Appbar.Action icon="magnify" size={24} onPress={onSearchIconPress} />
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" size={24} onPress={openMenu} />}
          contentStyle={{ marginTop: insets.top + 50, }}
        >
          <Menu.Item
            onPress={() => {
              closeMenu();
              // Sorting by date action
            }}
            title="Sort by Date"
            leadingIcon="sort-calendar-ascending"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              // Sorting alphabetically action
            }}
            title="Sort Alphabetically"
            leadingIcon="sort-alphabetical-ascending"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              // Filter by Tag action
            }}
            title="Filter by Tag"
            leadingIcon="filter"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              // Bulk Actions action
            }}
            title="Bulk Actions"
            leadingIcon="checkbox-multiple-outline"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              // Export Notes action
            }}
            title="Export Notes"
            leadingIcon="export"
          />
          <Menu.Item onPress={openSettings} title="Settings" leadingIcon="cog" />
        </Menu>
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {

  },
  container: {
    paddingVertical: 8,
  },
  title: {
    fontSize: 28,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: -1,
  },
  searchBar: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default AppHeader;
