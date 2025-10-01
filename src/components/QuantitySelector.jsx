export default function QuantitySelector({ qty, setQty }){
return (
<div className="flex items-center border rounded">
<button onClick={() => setQty(q => Math.max(1, q-1))} className="px-2">-</button>
<div className="px-3">{qty}</div>
<button onClick={() => setQty(q => q+1)} className="px-2">+</button>
</div>
)
}