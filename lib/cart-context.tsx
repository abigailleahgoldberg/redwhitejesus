"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  variantId: string;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  cartItemCount: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, variantId: string) => void;
  updateQuantity: (id: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.variantId === item.variantId
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string, variantId: string) => {
    setCartItems((prev) =>
      prev.filter((i) => !(i.id === id && i.variantId === variantId))
    );
  }, []);

  const updateQuantity = useCallback(
    (id: string, variantId: string, quantity: number) => {
      if (quantity <= 0) {
        setCartItems((prev) =>
          prev.filter((i) => !(i.id === id && i.variantId === variantId))
        );
      } else {
        setCartItems((prev) =>
          prev.map((i) =>
            i.id === id && i.variantId === variantId ? { ...i, quantity } : i
          )
        );
      }
    },
    []
  );

  const clearCart = useCallback(() => setCartItems([]), []);

  const cartItemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
