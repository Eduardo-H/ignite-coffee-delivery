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
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
	const [items, setItems] = useState<CartItem[]>([]);

	function addItemToCart(item: CartItem) {
		const existentItem = items.find(cartItem => cartItem.id === item.id);

		if (existentItem) {
			setItems((state) => {
				existentItem.price = item.price;
				existentItem.quantity = item.quantity;

				return state;
			});

			existentItem.price = item.price;
			existentItem.quantity = item.quantity;
		} else {
			setItems((state) => [...state, item]);
		}		
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