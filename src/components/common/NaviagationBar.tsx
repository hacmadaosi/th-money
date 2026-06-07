import { LAYOUT } from "@/constants/layout";
import { useSystemStore } from "@/store/systemStore";
import { Screen } from "@/types";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";

import { Pressable, StyleSheet } from "react-native";

export default function NavigationBar() {
  const { screenId, setScreenId } = useSystemStore();

  const router = useRouter();

  const listIcon = [
    { id: Screen.HOME, icon: "home", url: "/(home)" },
    { id: Screen.PROFILE, icon: "user-alt", url: "/(profile)" },
  ];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          transform: [{ scale: pressed ? 0.85 : 1 }],
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      {listIcon.map((e) => (
        <Pressable
          key={e.id}
          style={({ hovered }) => [
            styles.iconBase,
            screenId === e.id && styles.iconSelected,
            hovered && screenId !== e.id && styles.iconHover,
          ]}
          onPress={() => {
            router.replace(e.url as any);
            setScreenId(e.id);
          }}
          onHoverIn={() => {}}
        >
          <FontAwesome5
            name={e.icon}
            size={16}
            color={screenId == e.id ? LAYOUT.white : LAYOUT.black}
          />
        </Pressable>
      ))}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,

    zIndex: 1,
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    borderRadius: 100,
    gap: LAYOUT.gap,
    backgroundColor: LAYOUT.white,
  },
  iconBase: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    cursor: "pointer",
  },
  iconSelected: {
    backgroundColor: LAYOUT.deepskyblue,
  },
  iconHover: {
    backgroundColor: LAYOUT.hoverColor,
  },
});
