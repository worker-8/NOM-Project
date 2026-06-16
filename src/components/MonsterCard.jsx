import { Link } from 'react-router-dom'
import { Heart, Swords, Zap, Coins } from 'lucide-react'

function MonsterCard({ monster }) {
  return (
    <Link
      to={`/monsters/${monster.id}`}
      className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg bg-slate-600">
            {monster.nombre.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
              {monster.nombre}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
        <div className="flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-rose-500" />
          <span className="font-medium">{monster.vida} HP</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Swords className="w-4 h-4 text-amber-500" />
          <span className="font-medium">{monster.dano_ataque} ATK</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-blue-500" />
          <span className="font-medium">{monster.velocidad} SPD</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Coins className="w-4 h-4 text-yellow-500" />
          <span className="font-medium">{monster.oro_min}-{monster.oro_max} G</span>
        </div>
      </div>
    </Link>
  )
}

export default MonsterCard
