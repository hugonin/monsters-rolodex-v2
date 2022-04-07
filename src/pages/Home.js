import { projectFirestore } from "../firebase/config";
import { useEffect, useState } from "react";

import CardList from "../components/CardList";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unSubscribe = projectFirestore
      .collection("monsters")
      .onSnapshot(
        (snapshot) => {
          if (snapshot.empty) {
            setError("No monsters to load");
            setIsPending(false);
          } else {
            let results = [];
            snapshot.docs.forEach((doc) => {
              results.push({ id: doc.id, ...doc.data() });
            });

            setData(results);
            setIsPending(false);
          }
        },
        (err) => {
          setError(err.message);
          setIsPending(false);
        }
      );

    return () => unSubscribe();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <CardList monsters={data} />}
    </div>
  );
}
