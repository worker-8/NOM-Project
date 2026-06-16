import { Link } from 'react-router-dom'
import { Sword, Shield, BookOpen, ChevronRight } from 'lucide-react'
import items from '../data/items.json'
import monsters from '../data/monsters.json'

function Home() {
  const featuredItems = items.slice(0, 4)
  const featuredMonsters = monsters.slice(0, 4)

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
            Enciclopedia completa de items, monstruos y más. 
            Tu guía definitiva para dominar el mundo del juego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                      {item.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-slate-900 truncate">{item.name}</h3>
                      <p className="text-sm text-slate-500 capitalize">{item.type} • {item.rarity}</p>
                    </div>
                    <span className="text-sm font-medium text-amber-600">{item.value}g</span>
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
                      {monster.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-slate-900 truncate">{monster.name}</h3>
                      <p className="text-sm text-slate-500">Nv. {monster.level} • {monster.type}</p>
                    </div>
                    <span className="text-sm text-slate-600">{monster.hp} HP</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            ¿Qué encontrarás aquí?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sword className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{items.length}+ Items</h3>
              <p className="text-sm text-slate-600">Armas, armaduras, consumibles y materiales con stats completos.</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{monsters.length}+ Monstruos</h3>
              <p className="text-sm text-slate-600">Debilidades, resistencias, drops y localizaciones.</p>
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
