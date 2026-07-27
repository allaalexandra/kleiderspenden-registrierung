import { useState } from 'react'

export default function Spenden() {
  const [uebergabeart, setUebergabeart] = useState('')

  return (
    <>
      <h1 className="text-3xl font-bold text-primaer">Spende registrieren</h1>

      <form className="mt-8">
        <fieldset>
          <legend className="text-xl font-bold">1. Wie möchten Sie spenden?</legend>

          <div className="mt-3 flex flex-col gap-3">
            <label className="flex items-start gap-3 rounded-lg border border-rahmen bg-flaeche p-4">
              <input
                type="radio"
                name="uebergabeart"
                value="geschaeftsstelle"
                checked={uebergabeart === 'geschaeftsstelle'}
                onChange={(ereignis) => setUebergabeart(ereignis.target.value)}
                className="mt-1"
              />
              <span>
                <span className="block font-bold">Übergabe an der Geschäftsstelle</span>
                Sie bringen die Kleidung zu uns in die Friedensstraße 1 in Weikersheim.
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg border border-rahmen bg-flaeche p-4">
              <input
                type="radio"
                name="uebergabeart"
                value="abholung"
                checked={uebergabeart === 'abholung'}
                onChange={(ereignis) => setUebergabeart(ereignis.target.value)}
                className="mt-1"
              />
              <span>
                <span className="block font-bold">Abholung durch das Sammelfahrzeug</span>
                Wir holen die Kleidung bei Ihnen ab, wenn Sie im Umkreis 97xxx wohnen.
              </span>
            </label>
          </div>
        </fieldset>

        <p className="mt-6">
          Gewählt: <strong>{uebergabeart || 'noch nichts'}</strong>
        </p>
      </form>
    </>
  )
}
