export default function Feld({ id, label, wert, onAendern, onVerlassen, fehler, typ = 'text', maxLaenge = 100 }) {
  return (
    <div>
      <label htmlFor={id} className="block font-bold">{label}</label>

      <input
        type={typ}
        id={id}
        name={id}
        value={wert}
        onChange={onAendern}
        onBlur={onVerlassen}
        maxLength={maxLaenge}
        aria-invalid={fehler ? 'true' : 'false'}
        aria-describedby={fehler ? `${id}-fehler` : undefined}
        className={`mt-1 block w-full rounded-lg border bg-white px-3 py-2.5 ${
          fehler ? 'border-red-700' : 'border-rahmen'
        }`}
      />

      {fehler && (
        <p id={`${id}-fehler`} className="mt-1 text-sm font-bold text-red-700">
          {fehler}
        </p>
      )}
    </div>
  )
}