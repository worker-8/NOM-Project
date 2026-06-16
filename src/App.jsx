import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Items from './pages/Items'
import ItemDetail from './pages/ItemDetail'
import Monsters from './pages/Monsters'
import MonsterDetail from './pages/MonsterDetail'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/monsters" element={<Monsters />} />
          <Route path="/monsters/:id" element={<MonsterDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
