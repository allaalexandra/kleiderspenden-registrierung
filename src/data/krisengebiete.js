export const krisengebiete = [
  { id: 'ua-charkiw', name: 'Ukraine – Charkiw' },
  { id: 'sy-aleppo', name: 'Syrien – Aleppo' },
  { id: 'ps-gaza', name: 'Gazastreifen – Gaza-Stadt' },
  { id: 'sd-khartum', name: 'Sudan – Khartum' },
  { id: 'af-kabul', name: 'Afghanistan – Kabul' },
  { id: 'ye-sanaa', name: 'Jemen – Sanaa' },
]

export function nameFuerGebiet(id) {
  const treffer = krisengebiete.find((gebiet) => gebiet.id === id)
  return treffer ? treffer.name : id
}