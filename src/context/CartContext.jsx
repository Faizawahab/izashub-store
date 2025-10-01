import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'


const CartContext = createContext()
export function CartProvider({ children }) {
const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('lux_cart')) || [])
useEffect(() => localStorage.setItem('lux_cart', JSON.stringify(items)), [items])


const add = (product, qty = 1) => {
setItems(prev => {
const found = prev.find(p => p.id === product.id)
if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p)
return [...prev, { ...product, qty }]
})
}
const setQty = (id, qty) => setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
const remove = id => setItems(prev => prev.filter(p => p.id !== id))
const clear = () => setItems([])
const total = useMemo(() => items.reduce((s, p) => s + p.price * p.qty, 0), [items])


return <CartContext.Provider value={{ items, add, setQty, remove, clear, total }}>{children}</CartContext.Provider>
}
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)