import { useState } from "react"

function FetchDogApi() {
  const [data, setData] = useState([])
  const handle = async() => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    setData(await response.json())
  }
  return (
    <>
      <div className="flex align-middle place-items-center">
        <div className="inline-block w-1/4 h-48">
          {data.status === "success" ? <img src={data.message} alt="Dog image" className="object-cover dog"/> : <p></p>}
        </div>
        <button className="inline-block ml-12" onClick={handle}>Random</button>
      </div>
    </>
  )
}

export default FetchDogApi