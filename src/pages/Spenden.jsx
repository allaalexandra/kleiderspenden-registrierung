import { kleidungsarten } from '../data/kleidungsarten.js'
import { krisengebiete } from '../data/krisengebiete.js'

export default function Spenden() {
  return (
    <>
      <h1 className="text-3xl font-bold text-primaer">Spende registrieren</h1>

      <h2 className="mt-8 text-xl font-bold">Krisengebiete</h2>
      <ul className="mt-2 list-disc pl-6">
        {krisengebiete.map((gebiet) => (
          <li key={gebiet.id}>{gebiet.name}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold">Kleidungsarten</h2>
      {kleidungsarten.map((bereich) => (
        <div key={bereich.gruppe} className="mt-4">
          <h3 className="font-bold">{bereich.gruppe}</h3>
          <ul className="mt-1 list-disc pl-6">
            {bereich.arten.map((art) => (
              <li key={art.id}>{art.bezeichnung}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
