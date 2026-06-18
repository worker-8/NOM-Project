import { useState, useMemo } from 'react'
import SearchFilter from '../components/SearchFilter'
import MaidCard from '../components/MaidCard'
import maidsData from '../data/maids.json'

function Maids() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [unlockedFilter, setUnlockedFilter] = useState('all')

  const typeOptions = [
    { value: 'all', label: 'Todos los tipos' },
    { value: 'pistola', label: 'Pistola' },
    { value: 'revolver', label: 'Revolver' },
    { value: 'uzi', label: 'UZI' },
    { value: 'minigun', label: 'Minigun' },
    { value: 'rifle_asalto', label: 'Rifle de Asalto' },
    { value: 'melee', label: 'Melee' },
    { value: 'bazuka', label: 'Bazuka' },
    { value: 'escopeta', label: 'Escopeta' },
    { value: 'francotirador', label: 'Francotirador' },
    { value: 'ninja', label: 'Ninja' },
  ]

  const unlockedOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'unlocked', label: 'Disponibles' },
    { value: 'locked', label: 'Bloqueadas' },
  ]

  const filteredMaids = useMemo(() => {
    return maidsData.filter(maid => {
      const matchesSearch = maid.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = typeFilter === 'all' || maid.type === typeFilter
      const matchesUnlocked =
        unlockedFilter === 'all' ||
        (unlockedFilter === 'unlocked' && maid.unlocked) ||
        (unlockedFilter === 'locked' && !maid.unlocked)

      return matchesSearch && matchesType && matchesUnlocked
    })
  }, [searchTerm, typeFilter, unlockedFilter])

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Maids</h1>
          <p className="text-slate-600">Catálogo de maids con sus tipos de arma, estadísticas y costos de desbloqueo.</p>
        </div>

        <div className="space-y-3 mb-6">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Buscar maids..."
          />
          <SearchFilter
            filters={typeOptions}
            activeFilter={typeFilter}
            onFilterChange={setTypeFilter}
          />
          <SearchFilter
            filters={unlockedOptions}
            activeFilter={unlockedFilter}
            onFilterChange={setUnlockedFilter}
          />
        </div>

        <div className="mb-4 text-sm text-slate-500">
          Mostrando {filteredMaids.length} de {maidsData.length} maids
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMaids.map((maid) => (
            <MaidCard key={maid.id} maid={maid} />
          ))}
        </div>

        {filteredMaids.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No se encontraron maids con esos filtros.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Maids
