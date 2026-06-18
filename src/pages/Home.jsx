import { Link } from 'react-router-dom'
import { Sword, Shield, BookOpen, ChevronRight, Users, Lock, Unlock } from 'lucide-react'
import { getAllItems } from '../utils/items'
import enemiesData from '../data/enemies.json'
import maidsData from '../data/maids.json'

function Home() {
  const itemsArray = getAllItems()
  const featuredItems = itemsArray.slice(0, 4)

  const monstersArray = enemiesData.enemies || []
  const featuredMonsters = monstersArray.slice(0, 4)

  const featuredMaids = maidsData.slice(0, 4)

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Game Wiki
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Enciclopedia completa de items, monstruos, maids y más. 
            Tu guía definitiva para dominar el mundo del juego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              to="/items"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              <Sword className="w-4 h-4" />
              Explorar Items
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/monsters"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              <Shield className="w-4 h-4" />
              Ver Monstruos
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/maids"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600/80 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
            >
              <Users className="w-4 h-4" />
              Ver Maids
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Sword className="w-5 h-5" />
                  Items Destacados
                </h2>
                <Link to="/items" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Ver todos →
                </Link>
              </div>
              <div className="space-y-3">
                {featuredItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/items/${item.id}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 font-bold">
                      {item.nombre.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-slate-900 truncate">{item.nombre}</h3>
                      <p className="text-sm text-slate-500">{item.dano_min}-{item.dano_max} DMG • {item.critico}% CRIT</p>
                    </div>
                    <span className="text-xs font-medium text-slate-500 capitalize">{item.tipo}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Monstruos Destacados
                </h2>
                <Link to="/monsters" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Ver todos →
                </Link>
              </div>
              <div className="space-y-3">
                {featuredMonsters.map((monster) => (
                  <Link
                    key={monster.id}
                    to={`/monsters/${monster.id}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 font-bold">
                      {monster.nombre.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-slate-900 truncate">{monster.nombre}</h3>
                      <p className="text-sm text-slate-500">{monster.vida} HP • {monster.dano_ataque} ATK</p>
                    </div>
                    <span className="text-sm text-slate-600">{monster.oro_min}-{monster.oro_max} G</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Maids Destacadas
              </h2>
              <Link to="/maids" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Ver todas →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {featuredMaids.map((maid) => (
                <Link
                  key={maid.id}
                  to={`/maids/${maid.id}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 font-bold flex-shrink-0">
                    {maid.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-slate-900 truncate text-sm">{maid.name}</h3>
                    <p className="text-xs text-slate-500 capitalize">{maid.type}</p>
                  </div>
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    maid.unlocked ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {maid.unlocked
                      ? <Unlock className="w-3 h-3" />
                      : <Lock className="w-3 h-3" />
                    }
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            ¿Qué encontrarás aquí?
          </h2>
          <div className="grid sm:grid-cols-4 gap-6 mt-8">
            <div className="p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sword className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{itemsArray.length}+ Items</h3>
              <p className="text-sm text-slate-600">Armas, accesorios, trajes, reliquias y más con stats completos.</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{monstersArray.length}+ Enemigos</h3>
              <p className="text-sm text-slate-600">Debilidades, resistencias, drops y localizaciones.</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{maidsData.length}+ Maids</h3>
              <p className="text-sm text-slate-600">Maids con tipos de arma, stats y costos de desbloqueo.</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Datos Actualizados</h3>
              <p className="text-sm text-slate-600">Información mantenida al día con las últimas versiones.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
