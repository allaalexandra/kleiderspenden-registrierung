export default function Feld({ id, label, wert, onAendern, typ = 'text' }) {
  return (
    <div>
      <label htmlFor={id} className="block font-bold">{label}</label>
      <input
        type={typ}
        id={id}
        name={id}
        value={wert}
        onChange={onAendern}
        className="mt-1 block w-full rounded-lg border border-rahmen bg-white px-3 py-2"
      />
    </div>
  )
}