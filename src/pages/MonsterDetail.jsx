import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Heart, Swords, Footprints, Coins, FileCode } from 'lucide-react'
import monstersData from '../data/enemies.json'

function MonsterDetail() {
  const { id } = useParams()

  // Usar directamente el array enemies del nuevo formato
  const monsters = monstersData.enemies || []

  const monster = monsters.find(m => m.id === id)

  if (!monster) {
    return <Navigate to="/monsters" replace />
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
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center text-white text-4xl sm:text-5xl font-bold flex-shrink-0 bg-slate-600">
                {monster.nombre.charAt(0)}
              </div>

              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  {monster.nombre}
                </h1>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FileCode className="w-4 h-4" />
                  <code className="bg-slate-100 px-2 py-1 rounded">{monster.scene}</code>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Swords className="w-5 h-5" />
              Estadísticas
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-rose-600" />
                  </div>
                  <span className="text-slate-600">Vida</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{monster.vida}</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Swords className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-slate-600">Daño</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{monster.dano_ataque}</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Footprints className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-600">Spd Mov.</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{monster.velocidad}</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Coins className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="text-slate-600">Oro</span>
                </div>
                <span className="text-xl font-bold text-slate-900">{monster.oro_min}-{monster.oro_max}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonsterDetail
