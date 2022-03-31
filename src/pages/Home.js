import { useFetch } from "../hooks/useFetch"

import CardList from "../components/CardList"

export default function Home() {
  const { data, error, isPending } = useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <CardList cards={data} />}
    </div>
  )
}
