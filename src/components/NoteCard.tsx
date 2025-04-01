import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Card,
  Text,
  IconButton,
  useTheme,
  Chip,
  Menu,
  Divider,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface NoteCardProps {
  title: string;
  content: string;
  lastEdited: string;
  tags?: string[];
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content, lastEdited, tags }) => {
  const theme = useTheme();
  const [menuVisible, setMenuVisible] = React.useState<boolean>(false);

  return (
    <Card mode="elevated" style={styles.card}>
      <Card.Title
        title={title}
        titleVariant="titleLarge"
        titleStyle={[styles.title, { color: theme.colors.primary }]}
        right={(props) => (
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <IconButton
                {...props}
                icon={({ size, color }) => (
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={size}
                    color={color}
                  />
                )}
                onPress={() => setMenuVisible(true)}
              />
            }
          >
            <Menu.Item onPress={() => {}} title="Edit" />
            <Menu.Item onPress={() => {}} title="Delete" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Pin/Unpin" />
          </Menu>
        )}
      />
      <Card.Content>
        <Text
          variant="bodyMedium"
          style={styles.content}
          numberOfLines={4}
          ellipsizeMode="tail"
        >
          {content}
        </Text>
        <View style={styles.tags}>
          {tags?.map((tag, index) => (
            <Chip
              key={index}
              style={styles.tag}
              mode="outlined"
              selectedColor={theme.colors.primary}
            >
              {tag}
            </Chip>
          ))}
        </View>
      </Card.Content>
      <Card.Actions style={styles.footer}>
        <Text variant="labelSmall" style={{ color: theme.colors.tertiary }}>
          Last edited: {lastEdited}
        </Text>
        <View style={styles.iconContainer}>
          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons
                name="pin-outline"
                size={size}
                color={color}
              />
            )}
            onPress={() => {}}
            size={20}
          />
          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons
                name="star-outline"
                size={size}
                color={color}
              />
            )}
            onPress={() => {}}
            size={20}
          />
        </View>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 12,
    elevation: 1,
  },
  title: {
    marginBottom: 4,
    fontSize: 20,
  },
  content: {
    marginBottom: 8,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  tag: {
    marginRight: 4,
    marginBottom: 4,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 1,
  },
});

export default NoteCard;
