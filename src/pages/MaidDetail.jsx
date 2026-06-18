import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Swords, Sparkles, Gauge, Coins, Target, Lock, Unlock, FileCode } from 'lucide-react'
import maidsData from '../data/maids.json'

function MaidDetail() {
  const { id } = useParams()

  const maid = maidsData.find(m => m.id === id)

  if (!maid) {
    return <Navigate to="/maids" replace />
  }

  const damage = maid.damage_min !== undefined
    ? `${maid.damage_min}-${maid.damage_max}`
    : `${maid.damage}`

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/maids"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a maids
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center text-white text-4xl sm:text-5xl font-bold flex-shrink-0 bg-purple-600">
                {maid.name.charAt(0)}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200 capitalize">
                    {maid.type}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                    maid.unlocked
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}>
                    {maid.unlocked
                      ? <><Unlock className="w-3.5 h-3.5" /> Disponible</>
                      : <><Lock className="w-3.5 h-3.5" /> Bloqueada</>
                    }
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  {maid.name}
                </h1>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FileCode className="w-4 h-4" />
                  <code className="bg-slate-100 px-2 py-1 rounded">ID: {maid.id}</code>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Swords className="w-5 h-5" />
              Estadísticas
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Swords className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-slate-600">Daño</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{damage}</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-600">Vel. Ataque</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{maid.attack_speed}s</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-rose-600" />
                  </div>
                  <span className="text-slate-600">% Crítico</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{maid.crit_chance}%</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Swords className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-slate-600">Daño Crítico</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{maid.crit_damage}%</span>
              </div>

              {maid.range !== undefined && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-slate-600">Rango</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900">{maid.range}</span>
                </div>
              )}

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Coins className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="text-slate-600">Costo</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{maid.cost} G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaidDetail
