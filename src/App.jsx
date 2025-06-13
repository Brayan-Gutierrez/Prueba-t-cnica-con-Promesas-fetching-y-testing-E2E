import { useEffect, useState } from "react"
import './App.css'
import { getImgFact, getRandomFact } from "./services/facts"

export function App (){
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  //para recuperar la cita al cargar página
  useEffect(()=>{
    getRandomFact().then(setFact)
  },[])

  //para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(()=>{
    if (!fact) return
    const threeWords =fact.split(" ", 3).join(" ")
    getImgFact(threeWords).then(setImageUrl)  
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

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main >
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact &&<p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
      </section>
      </main>
  )
}