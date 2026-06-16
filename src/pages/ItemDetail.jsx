import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Package, Sparkles, Coins } from 'lucide-react'
import items from '../data/items.json'
import { rarityColors } from '../utils/colors'

function ItemDetail() {
  const { id } = useParams()
  const item = items.find(i => i.id === id)

  if (!item) {
    return <Navigate to="/items" replace />
  }

  const getTypeLabel = (type) => {
    const labels = {
      consumible: 'Consumible',
      arma: 'Arma',
      armadura: 'Armadura',
      accesorio: 'Accesorio',
      material: 'Material'
    }
    return labels[type] || type
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/items"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a items
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center text-white text-4xl sm:text-5xl font-bold flex-shrink-0 ${rarityColors[item.rarity]}`}>
                {item.name.charAt(0)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${rarityColors[item.rarity]} bg-opacity-10 text-slate-700 border-current capitalize`}>
                    {item.rarity}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200 capitalize">
                    {getTypeLabel(item.type)}
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  {item.name}
                </h1>
                
                <p className="text-slate-600 mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-amber-600 font-semibold text-lg">
                  <Coins className="w-5 h-5" />
                  {item.value} oro
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Información
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {item.effect && (
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Efecto</p>
                  <p className="font-medium text-emerald-600">{item.effect}</p>
                </div>
              )}
              
              {item.stats && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 sm:col-span-2">
                  <p className="text-sm text-slate-500 mb-2">Estadísticas</p>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(item.stats).map(([key, value]) => (
                      value > 0 && (
                        <span key={key} className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
                          {key.toUpperCase()}: +{value}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">ID</p>
                <p className="font-medium text-slate-700 font-mono text-sm">{item.id}</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Tipo</p>
                <p className="font-medium text-slate-700 capitalize">{item.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
