import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Wallet = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Wallet {id}</Text>
    </View>
  );
};

export default Wallet;