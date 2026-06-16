import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Heart, Swords, Shield, MapPin, Skull, Sparkles } from 'lucide-react'
import monsters from '../data/monsters.json'
import { typeColors } from '../utils/colors'

function MonsterDetail() {
  const { id } = useParams()
  const monster = monsters.find(m => m.id === id)

  if (!monster) {
    return <Navigate to="/monsters" replace />
  }

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
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/monsters"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a monstruos
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center text-white text-4xl sm:text-5xl font-bold flex-shrink-0 ${typeColors[monster.type]}`}>
                {monster.name.charAt(0)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${typeStyles[monster.type]}`}>
                    {getTypeLabel(monster.type)}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    Nivel {monster.level}
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  {monster.name}
                </h1>
                
                <p className="text-slate-600">
                  {monster.description}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Swords className="w-5 h-5" />
                  Estadísticas
                </h2>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-rose-600" />
                      </div>
                      <span className="text-slate-600">Salud</span>
                    </div>
                    <span className="text-xl font-bold text-slate-900">{monster.hp}</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Swords className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-slate-600">Ataque</span>
                    </div>
                    <span className="text-xl font-bold text-slate-900">{monster.atk}</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-slate-600">Defensa</span>
                    </div>
                    <span className="text-xl font-bold text-slate-900">{monster.def}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Combate
                </h2>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">Debilidad</p>
                    <p className={`font-semibold capitalize ${monster.weakness !== 'none' ? 'text-rose-600' : 'text-slate-400'}`}>
                      {monster.weakness !== 'none' ? monster.weakness : 'Ninguna'}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">Resistencia</p>
                    <p className={`font-semibold capitalize ${monster.resistance !== 'none' ? 'text-blue-600' : 'text-slate-400'}`}>
                      {monster.resistance !== 'none' ? monster.resistance : 'Ninguna'}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                      <Skull className="w-4 h-4" />
                      Drops
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {monster.drops.map((drop) => (
                        <span key={drop} className="px-2 py-1 bg-slate-100 rounded text-xs font-medium text-slate-700 capitalize">
                          {drop.replace(/-/g, ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Localizaciones
              </h2>
              <div className="flex flex-wrap gap-2">
                {monster.locations.map((location) => (
                  <span key={location} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700">
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonsterDetail
