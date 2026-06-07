import { LAYOUT } from "@/constants/layout";
import { supabase } from "@/services/supabase";
import { useSystemStore } from "@/store/systemStore";
import { Session } from "@supabase/supabase-js";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const { screenId } = useSystemStore();

  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsInitialized(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsInitialized(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!session && !inAuthGroup) {
      router.replace("/(auth)" as any);
    } else if (session && inAuthGroup) {
      router.replace("/(home)" as any);
    }
  }, [session, segments, isInitialized]);

  if (!isInitialized) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={LAYOUT.deepskyblue} />
        <Text>Đang tải</Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(home)" />
        <Stack.Screen name="(profile)" />
      </Stack>
      <Toast />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: LAYOUT.gap,
  },
});
