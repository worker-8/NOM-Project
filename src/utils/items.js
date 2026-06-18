import weaponsData from '../data/items/weapons.json'
import accessoriesData from '../data/items/accessories.json'
import bootsData from '../data/items/boots.json'
import glovesData from '../data/items/gloves.json'
import headItemsData from '../data/items/head_items.json'
import outfitsData from '../data/items/outfits.json'
import relicsData from '../data/items/relics.json'

const allJsonFiles = [
  weaponsData,
  accessoriesData,
  bootsData,
  glovesData,
  headItemsData,
  outfitsData,
  relicsData,
]

export function getAllItems() {
  return allJsonFiles.flatMap(file =>
    Object.entries(file).map(([key, data]) => ({ id: key, ...data }))
  )
}
