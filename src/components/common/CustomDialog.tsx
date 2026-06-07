import { LAYOUT } from "@/constants/layout";
import { useSystemStore } from "@/store/systemStore";
import { StyleSheet } from "react-native";
import { Dialog, Portal, Text } from "react-native-paper";
import Button from "./Button";

interface Props {
  title: string;
  content: string;
  type?: "confirmation" | "informational";
  onDismiss: () => void;
  onSubmit: () => void;
}

export default function CustomDialog({
  onDismiss,
  onSubmit,
  title,
  content,
  type = "confirmation",
}: Props) {
  const { visibleDialog } = useSystemStore();
  return (
    <Portal>
      <Dialog visible={visibleDialog} style={styles.dialog}>
        <Dialog.Title>
          <Text style={styles.title}>{title}</Text>
        </Dialog.Title>
        <Dialog.Content>
          <Text style={styles.content}>{content}</Text>
        </Dialog.Content>
        <Dialog.Actions style={styles.buttonContainer}>
          <Button title="Quay lại" variant="secondary" onPress={onDismiss} />
          <Button title="Xác nhận" onPress={onSubmit} />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialog: {
    alignSelf: "center",
    backgroundColor: LAYOUT.backgroundColor,
  },
  title: {
    fontWeight: "bold",
    color: LAYOUT.text,
  },
  content: {
    color: LAYOUT.text,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    gap: LAYOUT.gap,
  },
});
