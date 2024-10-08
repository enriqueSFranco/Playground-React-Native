import { FlatList, Platform, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { CardPizzaOrder } from "@/features/ui/organisms/card-pizza-order";
import { styles as globalStyles } from "@/styles/globalStyles";
import { ButtonPressable } from "@/features/ui/atoms/button-pressable";

export default function Cart () {
  const { cart, total } = useShoppingCart();

  return (
    <View style={globalStyles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <FlatList
        data={cart}
        ListEmptyComponent={
          <View>
            <Text>carrito vacio</Text>
          </View>
        }
        renderItem={({ item }) => <CardPizzaOrder order={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10 }}
      />
      <Text>Total: {total}</Text>
      <ButtonPressable text="checkout" />
    </View>
  );
}
