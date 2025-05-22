import { createContext, useContext, ReactNode, useState } from 'react'
import { ProductInterface } from '../types/products'
import { useEffect } from 'react'

type CartItem = ProductInterface & { quantity: number };

// 1. Define your context type
type CartContextType = {
    cart: CartItem[];
    addToCart: (product: ProductInterface) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

// 2. Create context with initial undefined value
const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: ProductInterface) => {
        setCart(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            return existingItem
               ? prev.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1}
                  : item
               )
               : [...prev, { ...product, quantity: 1}]
        });
    }

    const removeFromCart = (productId: number) => {
       setCart(prev => prev.filter(item => item.id !== productId))
    }

    const clearCart = () => {
    setCart([]);
 }

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
}, [])     
  
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}

 export function useCart() {
        const context = useContext(CartContext);
        if (!context) throw new Error('useCArt must be use within CartProvider') 
        return context;    
    }


    