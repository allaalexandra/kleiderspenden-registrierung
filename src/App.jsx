import { Routes, Route } from 'react-router'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Startseite from './pages/Startseite.jsx'
import Spenden from './pages/Spenden.jsx'
import Bestaetigung from './pages/Bestaetigung.jsx'
import Verein from './pages/Verein.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import NichtGefunden from './pages/NichtGefunden.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-hintergrund text-schrift">
      <Header />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/spenden" element={<Spenden />} />
          <Route path="/bestaetigung" element={<Bestaetigung />} />
          <Route path="/verein" element={<Verein />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NichtGefunden />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

