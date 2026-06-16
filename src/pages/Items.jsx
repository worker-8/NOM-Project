import { useState, useMemo } from 'react'
import SearchFilter from '../components/SearchFilter'
import ItemCard from '../components/ItemCard'
import items from '../data/items.json'

function Items() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [rarityFilter, setRarityFilter] = useState('all')

  const typeOptions = [
    { value: 'all', label: 'Todos los tipos' },
    { value: 'consumible', label: 'Consumibles' },
    { value: 'arma', label: 'Armas' },
    { value: 'armadura', label: 'Armaduras' },
    { value: 'accesorio', label: 'Accesorios' },
    { value: 'material', label: 'Materiales' }
  ]

  const rarityOptions = [
    { value: 'all', label: 'Todas las rarezas' },
    { value: 'comun', label: 'Común' },
    { value: 'raro', label: 'Raro' },
    { value: 'epico', label: 'Épico' },
    { value: 'legendario', label: 'Legendario' }
  ]

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = typeFilter === 'all' || item.type === typeFilter
      const matchesRarity = rarityFilter === 'all' || item.rarity === rarityFilter
      
      return matchesSearch && matchesType && matchesRarity
    })
  }, [searchTerm, typeFilter, rarityFilter])

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Items</h1>
          <p className="text-slate-600">Catálogo completo de armas, armaduras, consumibles y más.</p>
        </div>

        <div className="space-y-3 mb-6">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <SearchFilter
              filters={typeOptions}
              activeFilter={typeFilter}
              onFilterChange={setTypeFilter}
            />
            <SearchFilter
              filters={rarityOptions}
              activeFilter={rarityFilter}
              onFilterChange={setRarityFilter}
            />
          </div>
        </div>

        <div className="mb-4 text-sm text-slate-500">
          Mostrando {filteredItems.length} de {items.length} items
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No se encontraron items con esos filtros.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Items
