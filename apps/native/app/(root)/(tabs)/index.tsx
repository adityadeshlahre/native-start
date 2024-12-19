import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/wallet/1">Wallet</Link>
      <Text className="text-2xl text-teal-600">Tabs</Text>
    </View>
  );
}
