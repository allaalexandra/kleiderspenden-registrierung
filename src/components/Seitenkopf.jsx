export default function Seitenkopf({ titel, einleitung }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primaer">{titel}</h1>

      {einleitung && <p className="mt-3 max-w-prose">{einleitung}</p>}
    </div>
  )
}