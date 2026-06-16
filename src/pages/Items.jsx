import { useState, useMemo } from 'react'
import SearchFilter from '../components/SearchFilter'
import ItemCard from '../components/ItemCard'
import itemsData from '../data/items.json'

function Items() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  // Convertir el objeto de items a array con IDs
  const items = useMemo(() => {
    return Object.entries(itemsData).map(([id, data]) => ({
      id,
      ...data
    }))
  }, [])

  const typeOptions = [
    { value: 'all', label: 'Todos los tipos' },
    { value: 'arma', label: 'Armas' }
  ]

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = typeFilter === 'all' || item.tipo === typeFilter

      return matchesSearch && matchesType
    })
  }, [searchTerm, typeFilter, items])

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Armas</h1>
          <p className="text-slate-600">Catálogo de armas con estadísticas de daño, crítico y velocidad.</p>
        </div>

        <div className="space-y-3 mb-6">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Buscar armas..."
          />
          <SearchFilter
            filters={typeOptions}
            activeFilter={typeFilter}
            onFilterChange={setTypeFilter}
          />
        </div>

        <div className="mb-4 text-sm text-slate-500">
          Mostrando {filteredItems.length} de {items.length} armas
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No se encontraron armas con esos filtros.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Items
