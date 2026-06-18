import { Link } from 'react-router-dom'
import { Swords, Sparkles, Gauge, Coins, Lock, Unlock } from 'lucide-react'

function MaidCard({ maid }) {
  const damage = maid.damage_min !== undefined
    ? `${maid.damage_min}-${maid.damage_max}`
    : `${maid.damage}`

  return (
    <Link
      to={`/maids/${maid.id}`}
      className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg bg-purple-600">
            {maid.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
              {maid.name}
            </h3>
            <span className="text-xs text-slate-500 uppercase">{maid.type}</span>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          maid.unlocked
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-slate-100 text-slate-500'
        }`}>
          {maid.unlocked
            ? <><Unlock className="w-3 h-3" /> Disponible</>
            : <><Lock className="w-3 h-3" /> Bloqueada</>
          }
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 mb-2">
        <div className="flex items-center gap-1.5">
          <Swords className="w-4 h-4 text-amber-500" />
          <span className="font-medium">{damage} DMG</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span className="font-medium">{maid.crit_chance}% CRIT</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Gauge className="w-4 h-4 text-blue-500" />
          <span className="font-medium">{maid.attack_speed}s</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Coins className="w-4 h-4 text-yellow-500" />
          <span className="font-medium">{maid.cost} G</span>
        </div>
      </div>
    </Link>
  )
}

export default MaidCard
