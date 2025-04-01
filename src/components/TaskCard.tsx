import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Checkbox, IconButton, useTheme, Menu, Divider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface TaskCardProps {
  title: string;
  description?: string;
  dueDate: string;
  completed: boolean;
  priority: "High" | "Normal";
  onToggleComplete: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  dueDate,
  completed,
  onToggleComplete,
  onDelete,
}) => {
  const theme = useTheme();
  const [menuVisible, setMenuVisible] = React.useState(false);

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
                  <MaterialCommunityIcons name="dots-vertical" size={size} color={color} />
                )}
                onPress={() => setMenuVisible(true)}
              />
            }
          >
            <Menu.Item onPress={onDelete} title="Delete" />
            <Divider />
            <Menu.Item onPress={onToggleComplete} title={completed ? "Mark as Incomplete" : "Mark as Complete"} />
          </Menu>
        )}
      />
      <Card.Content>
        {description ? (
          <Text variant="bodyMedium" style={styles.description} numberOfLines={4} ellipsizeMode="tail">
            {description}
          </Text>
        ) : null}
        <View style={styles.footer}>
          <MaterialCommunityIcons name="calendar-clock" size={18} color={theme.colors.primary} />
          <Text variant="labelSmall" style={[styles.dueDate, { color: theme.colors.tertiary }]}>Due: {dueDate}</Text>
          <Checkbox
            status={completed ? "checked" : "unchecked"}
            onPress={onToggleComplete}
            color={theme.colors.primary}
          />
        </View>
      </Card.Content>
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
  description: {
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dueDate: {
    marginLeft: 6,
  },
  checkbox: {
    marginLeft: "auto",
  },
});

export default TaskCard;
