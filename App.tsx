import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-950 items-center justify-center flex-1">
      <Text className="text-zinc-50 font-bold text-5xl">Hello world</Text>
      <StatusBar style="light" />
    </View>
  )
}
