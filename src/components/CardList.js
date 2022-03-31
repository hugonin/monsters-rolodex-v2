import { Link } from "react-router-dom";

export default function CardList({ cards }) {
  if (cards.length === 0) {
    return <div className="alert alert-error mt-2">No cards to load</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 p-8">
      {cards.map((card) => (
        <div className={`card container mx-auto w-96 bg-primary`}>
          <figure>
            <img src={`https://robohash.org/${card.id}?set=set2`} alt="Shoes" />
          </figure>
          <div key={card.id} className={`card-body `}>
            <h2 className={`card-title  text-accent`}>{card.name}</h2>
            <p>{card.username}</p>
            <p>{card.email}</p>
            <div className="card-actions justify-end">
              <button className={`btn  bg-base `}>
                <Link to={`/cards/${card.id}`} className={`text  text-accent`}>
                  More info
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
