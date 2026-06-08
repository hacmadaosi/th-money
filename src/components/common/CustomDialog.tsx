import { LAYOUT } from "@/constants/layout";
import { useSystemStore } from "@/store/systemStore";
import { StyleSheet } from "react-native";
import { Dialog, Portal, Text } from "react-native-paper";
import Button from "./Button";

interface Props {
  type?: "confirmation" | "informational";
}

export default function CustomDialog({ type = "confirmation" }: Props) {
  const { visibleDialog, setVisibleDialog, dialogDisplay } = useSystemStore();

  return (
    <Portal>
      <Dialog visible={visibleDialog} style={styles.dialog}>
        <Dialog.Title>
          <Text style={styles.title}>{dialogDisplay?.title}</Text>
        </Dialog.Title>
        <Dialog.Content>
          <Text style={styles.content}>{dialogDisplay?.content}</Text>
        </Dialog.Content>
        <Dialog.Actions style={styles.buttonContainer}>
          <Button
            title="Quay lại"
            variant="secondary"
            onPress={() => setVisibleDialog(false)}
          />
          <Button title="Xác nhận" onPress={dialogDisplay?.onSubmit} />
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
