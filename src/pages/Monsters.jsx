import { useState, useMemo } from 'react'
import SearchFilter from '../components/SearchFilter'
import MonsterCard from '../components/MonsterCard'
import monstersData from '../data/monsters.json'

function Monsters() {
  const [searchTerm, setSearchTerm] = useState('')

  // Convertir el objeto de monstruos en un array con IDs
  const monsters = useMemo(() => {
    return Object.entries(monstersData).map(([id, data]) => ({
      id,
      ...data
    }))
  }, [])

  const filteredMonsters = useMemo(() => {
    return monsters.filter(monster => {
      const matchesSearch = monster.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesSearch
    })
  }, [searchTerm, monsters])

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Monstruos</h1>
          <p className="text-slate-600">Catálogo de enemigos con stats y recompensas.</p>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar monstruos..."
        />

        <div className="mb-4 text-sm text-slate-500">
          Mostrando {filteredMonsters.length} de {monsters.length} monstruos
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMonsters.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} />
          ))}
        </div>

        {filteredMonsters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No se encontraron monstruos con ese nombre.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Monsters
