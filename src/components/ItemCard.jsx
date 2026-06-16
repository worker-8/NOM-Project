import { Link } from 'react-router-dom'
import { Sparkles, Gauge, Swords } from 'lucide-react'

function ItemCard({ item }) {
  return (
    <Link
      to={`/items/${item.id}`}
      className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg bg-slate-600">
            {item.nombre.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
              {item.nombre}
            </h3>
            <span className="text-xs text-slate-500 uppercase">{item.maid_tipo}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-sm text-slate-600">
        <div className="flex items-center gap-1.5">
          <Swords className="w-4 h-4 text-amber-500" />
          <span className="font-medium">{item.dano_min}-{item.dano_max}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span className="font-medium">{item.critico}%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Gauge className="w-4 h-4 text-blue-500" />
          <span className="font-medium">{item.velocidad_ataque > 0 ? '+' : ''}{item.velocidad_ataque}</span>
        </div>
      </div>
    </Link>
  )
}

export default ItemCard
