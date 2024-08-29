import { useRouter, Stack, router } from "expo-router";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
        headerShown: false,
        title:"Index",
      }} />

      <Stack.Screen 
        name='login'
        options={{
          presentation: 'modal',
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28}/>
            </TouchableOpacity>

          )
        }}/>
    </Stack>)
}
