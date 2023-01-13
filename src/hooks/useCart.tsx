import { createContext, ReactNode, useContext, useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
  quantity: number;
	currentPrice: number;
}

interface CartContextData {
  items: CartItem[];
	cartItemsPrice: number;
	cartDeliveryFee: number;
	cartTotalPrice: number;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string) => void;
	clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
	const [items, setItems] = useState<CartItem[]>([]);
	const [cartItemsPrice, setCartItemsPrice] = useState(0);
	const [cartDeliveryFee, setCartDeliveryFee] = useState(0);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);

	function addItemToCart(item: CartItem) {
		const existentItem = items.find(cartItem => cartItem.id === item.id);

		if (existentItem) {
			setItems((state) => {
				state.forEach(cartItem => {
					if (cartItem.id === item.id) {
						cartItem.currentPrice = item.currentPrice;
						cartItem.quantity = item.quantity;
					}
				});

				return state;
			});
		} else {
			setItems((state) => [...state, item]);
		}
		
		setItems((state) => {
			const itemsTotal = state.reduce((acc, current) => acc + current.currentPrice, 0);
			const deliveryFee = itemsTotal * 0.2;

			setCartItemsPrice(itemsTotal);
			setCartDeliveryFee(deliveryFee);
			setCartTotalPrice(itemsTotal + deliveryFee);

			return state;
		});
	}

	function removeItemFromCart(id: string) {
		const filteredItems = items.filter(item => item.id !== id);

		setItems(filteredItems);
	}

	function clearCart() {
		setItems([]);
		setCartItemsPrice(0);
		setCartDeliveryFee(0);
		setCartTotalPrice(0);
	}

	return (
		<CartContext.Provider value={{
			items,
			cartItemsPrice,
			cartDeliveryFee,
			cartTotalPrice,
			addItemToCart,
			removeItemFromCart,
			clearCart
		}}>
			{ children }
		</CartContext.Provider>
	);
}

export function useCart() {
	const cartContext = useContext(CartContext);
	return cartContext;
}