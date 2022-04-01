import { useFetch } from "../hooks/useFetch"

import CardList from "../components/CardList"

export default function Home() {
  const { data, error, isPending } = useFetch("http://localhost:3000/monsters")
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <CardList monsters={data} />}
    </div>
  )
}
