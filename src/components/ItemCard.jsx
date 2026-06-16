import { Link } from 'react-router-dom'
import { rarityColors } from '../utils/colors'

function ItemCard({ item }) {
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
    <Link
      to={`/items/${item.id}`}
      className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg ${rarityColors[item.rarity]}`}>
            {item.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
              {item.name}
            </h3>
            <span className="text-xs text-slate-500">{getTypeLabel(item.type)}</span>
          </div>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${rarityColors[item.rarity]} bg-opacity-10 text-slate-700 border-current`}>
          {item.rarity}
        </span>
      </div>
      
      <p className="text-sm text-slate-600 line-clamp-2 mb-3">
        {item.description}
      </p>
      
      <div className="flex items-center justify-between text-sm">
        {item.effect && (
          <span className="text-emerald-600 font-medium">{item.effect}</span>
        )}
        {item.stats && (
          <span className="text-slate-500">
            {Object.entries(item.stats)
              .filter(([_, val]) => val > 0)
              .map(([key, val]) => `${key.toUpperCase()}: +${val}`)
              .join(' | ')}
          </span>
        )}
        <span className="text-amber-600 font-medium ml-auto">{item.value}g</span>
      </div>
    </Link>
  )
}

export default ItemCard
