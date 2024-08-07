import {
  ShoppingCartContex,
  ShoppingCartContexType,
} from "@/provider/ShoppingCartProvider";
import { useContext } from "react";

export function useShoppingCart (): ShoppingCartContexType | null {
  const ctx = useContext(ShoppingCartContex);

  if (!ctx) {
    throw new Error(
      "useShoppingCart debe ser usado dentro de un proveedor de PizzaSizeContext.",
    );
  }
  return ctx;
}