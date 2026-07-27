import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-hintergrund text-schrift">
      <Header />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <h1 className="text-3xl font-bold text-primaer">Kleiderspende registrieren</h1>
        <p className="mt-4 max-w-prose">
          Spenden Sie gebrauchte Kleidung und entscheiden Sie selbst, in welche
          Krisenregion Ihre Spende geht.
        </p>
      </main>

      <Footer />
    </div>
  )
}
