import { Link } from 'react-router-dom'
import { Heart, Swords, Shield, typeColors } from '../utils/colors'

function MonsterCard({ monster }) {
  const getTypeLabel = (type) => {
    const labels = {
      normal: 'Normal',
      elite: 'Élite',
      boss: 'Jefe'
    }
    return labels[type] || type
  }

  const typeStyles = {
    normal: 'bg-slate-100 text-slate-700 border-slate-200',
    elite: 'bg-amber-100 text-amber-700 border-amber-200',
    boss: 'bg-rose-100 text-rose-700 border-rose-200'
  }

  return (
    <Link
      to={`/monsters/${monster.id}`}
      className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg ${typeColors[monster.type]}`}>
            {monster.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
              {monster.name}
            </h3>
            <span className="text-xs text-slate-500">Nv. {monster.level}</span>
          </div>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${typeStyles[monster.type]}`}>
          {getTypeLabel(monster.type)}
        </span>
      </div>
      
      <p className="text-sm text-slate-600 line-clamp-2 mb-4">
        {monster.description}
      </p>
      
      <div className="flex items-center gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-rose-500" />
          <span className="font-medium">{monster.hp}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Swords className="w-4 h-4 text-amber-500" />
          <span className="font-medium">{monster.atk}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-blue-500" />
          <span className="font-medium">{monster.def}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-slate-100 flex gap-2 text-xs">
        {monster.weakness !== 'none' && (
          <span className="text-rose-600">
            Debilidad: {monster.weakness}
          </span>
        )}
        {monster.resistance !== 'none' && (
          <span className="text-blue-600">
            Resistencia: {monster.resistance}
          </span>
        )}
      </div>
    </Link>
  )
}

export default MonsterCard
