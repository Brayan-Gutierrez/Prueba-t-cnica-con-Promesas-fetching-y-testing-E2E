const CAT_ENDPOINT_RANDOM_FACT =`https://catfact.ninja/fact`

//con async await
export const getRandomFact = async ()=> {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!res.ok) throw new Error("Error fetching fact")
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    //si hay error con la respuesta
    //hay error con la petición
   }
}

export const getImgFact = async (threeWords) =>{
  try {
    const res = await fetch(`https://cataas.com/cat/says/${threeWords}?size&color=red&json=true`)
    if (!res.ok) throw new Error("Error fetching")
    const response = await res.json()
    const {url} = response
    return url
  } catch (error) {
    //si hay error con la respuesta
    //hay error con la petición
  }
}

// export const getRandomFact=()=> {
//   return fetch(CAT_ENDPOINT_RANDOM_FACT)
//   .then(res => {
//     if (!res.ok) throw new Error("Error fetching fact")
//     return res.json()
//   })
//   .then(data => {
//     const {fact} =data
//     return fact
//   })
//   .catch((err) => {
//     //si hay error con la respuesta
//     //hay error con la petición
//   })
// }

//Versiones sin control de errores

//con async await
// export const getRandomFact = async ()=> {
//   const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
//   const data = await res.json()
//   const { fact } = data
//   return fact
// }

// export const getRandomFact = ()=> {
//   return fetch(CAT_ENDPOINT_RANDOM_FACT)
//   .then(res => res.json())
//   .then(data => {
//     const {fact} = data
//     return fact
//   })
// }