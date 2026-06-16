import { useState, useMemo } from 'react'
import SearchFilter from '../components/SearchFilter'
import MonsterCard from '../components/MonsterCard'
import monsters from '../data/monsters.json'

function Monsters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  const typeOptions = [
    { value: 'all', label: 'Todos los tipos' },
    { value: 'normal', label: 'Normal' },
    { value: 'elite', label: 'Élite' },
    { value: 'boss', label: 'Jefe' }
  ]

  const filteredMonsters = useMemo(() => {
    return monsters.filter(monster => {
      const matchesSearch = monster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          monster.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          monster.locations.some(loc => loc.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesType = typeFilter === 'all' || monster.type === typeFilter
      
      return matchesSearch && matchesType
    })
  }, [searchTerm, typeFilter])

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Monstruos</h1>
          <p className="text-slate-600">Catálogo de enemigos con stats, debilidades y drops.</p>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filters={typeOptions}
          activeFilter={typeFilter}
          onFilterChange={setTypeFilter}
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
            <p className="text-slate-500">No se encontraron monstruos con esos filtros.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Monsters
