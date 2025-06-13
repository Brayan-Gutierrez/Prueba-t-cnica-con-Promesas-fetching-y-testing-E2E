import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT =`https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size&color=red&json=true`

export function App (){
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  //para recuperar la cita al cargar página
  useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res =>{
      if (!res.ok) throw new Error("Error fetching fact")    
      return res.json()
    })
    .then(data => {
      const {fact} = data
      setFact(fact)
    })
    .catch((err) => {
      //si hay error con la respuesta
      //hay error con la petición
    })
  },[])

  //para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(()=>{
    if (!fact) return

    const threeWords =fact.split(" ", 3).join(" ")
    console.log(threeWords)

    fetch(`https://cataas.com/cat/says/${threeWords}?size&color=red&json=true`)
    .then(res => res.json())
    .then(response =>{
      const {url} = response
      setImageUrl(url)
    })  
  },[fact])

  //Toda la logica en un useEffect
  // useEffect(()=> {
  //   fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     .then(res => res.json())
  //     .then(data => {
  //       const {fact} = data
  //       setFact(fact)

  //       // const threeWords = fact.split(" ").slice(0,3).join(" ")
  //       const threeWords = fact.split(" ", 3).join(" ")
  //       console.log(threeWords)

  //       fetch(`https://cataas.com/cat/says/${threeWords}?size&color=red&json=true`)
  //       .then(res => res.json())
  //       .then(response =>{
  //         const {url} = response
  //         console.log(url)
  //         setImageUrl(url)
  //       })
  //     })
  // },[])

  // useEffect(() =>{
  //   async function getRandomFact (){
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const json = await res.json()
  //     setFact(json.fact)
  //   }

  //   getRandomFact()
  // })

  return (
    <main >
      <h1>App de gatitos</h1>
      <section>
        {fact &&<p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
      </section>
      </main>
  )
}