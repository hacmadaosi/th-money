import { supabase } from "@/services/supabase";
import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  logout: () => Promise<void>;
  login: () => Promise<{
    success: boolean;
    error: string | null;
  }>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  logout: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      throw error;
    }
  },
  login: async () => {
    const { email, password } = get();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      error: null,
    };
  },

  email: "",
  password: "",

  setEmail(email) {
    set({ email: email });
  },
  setPassword(password) {
    set({ password: password });
  },
}));
