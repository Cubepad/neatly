import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Appbar, Menu, useTheme, Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AppHeader: React.FC = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  if (isSearching) {
    return (
      <View style={{ backgroundColor: theme.colors.surface, paddingTop: insets.top }}>
        <StatusBar
          barStyle={theme.dark ? "light-content" : "dark-content"}
          backgroundColor={theme.colors.surface}
        />
        <Searchbar
          placeholder="Search"
          icon="arrow-left" // Back button on the left
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
        <Appbar.Action icon="magnify" size={24} onPress={() => setIsSearching(true)} />
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="dots-vertical" size={24} onPress={openMenu} />
          }
          contentStyle={{ marginTop: insets.top + 50, borderRadius: 10 }}
        >
          <Menu.Item
            onPress={() => {}}
            title="Sort by Date"
            leadingIcon="sort-calendar-ascending"
          />
          <Menu.Item
            onPress={() => {}}
            title="Sort Alphabetically"
            leadingIcon="sort-alphabetical-ascending"
          />
          <Menu.Item
            onPress={() => {}}
            title="Filter by Tag"
            leadingIcon="filter"
          />
          <Menu.Item
            onPress={() => {}}
            title="Bulk Actions"
            leadingIcon="checkbox-multiple-outline"
          />
          <Menu.Item
            onPress={() => {}}
            title="Export Notes"
            leadingIcon="export"
          />
          <Menu.Item onPress={() => {}} title="Settings" leadingIcon="cog" />
          <Menu.Item
            onPress={() => {}}
            title="About"
            leadingIcon="information-outline"
          />
        </Menu>
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    elevation: 0,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: -1,
  },
  searchBar: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default AppHeader;
