import { createContext, ReactNode, useContext, useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
  quantity: number;
}

interface CartContextData {
  items: CartItem[];
  addItemToCart: () => void;
  removeItemFromCart: (id: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
	const [items, setItems] = useState<CartItem[]>([]);

	function addItemToCart() {
		setItems([]);
	}

	function removeItemFromCart(id: string) {
		const filteredItems = items.filter(item => item.id !== id);

		setItems(filteredItems);
	}

	return (
		<CartContext.Provider value={{
			items,
			addItemToCart,
			removeItemFromCart
		}}>
			{ children }
		</CartContext.Provider>
	);
}

export function useCart() {
	const cartContext = useContext(CartContext);
	return cartContext;
}