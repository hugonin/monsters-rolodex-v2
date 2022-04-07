import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { projectFirestore } from "../firebase/config";

import { UserIcon, MailIcon, TrashIcon } from "@heroicons/react/solid";

export default function CardList({ monsters }) {
  const { mode } = useTheme();

  if (monsters.length === 0) {
    return <div className="alert alert-error mt-2">No monsters to load</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("monsters").doc(id).delete();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 p-8">
      {monsters.map((monster) => (
        <div
          key={monster.id}
          className={`card container mx-auto w-96 ${mode} bg-primary`}
        >
          <div className="flex flex-row-reverse mt-6 mr-4">
            <TrashIcon
              className="h-6 w-6 cursor-pointer "
              onClick={() => handleClick(monster.id)}
            />
          </div>

          <figure>
            <img
              src={`https://robohash.org/${monster.id}?set=set2`}
              alt="Robot monsters"
            />
          </figure>
          <div className={`card-body `}>
            <h2 className={`card-title ${mode} text-accent`}>{monster.name}</h2>
            <div className="flex flex-col">
              <div className="flex">
                <UserIcon className="h-5 w-5 mx-2" />
                {monster.username}
              </div>
              <div className="flex">
                <MailIcon className="h-5 w-5 mx-2" />
                {monster.email}
              </div>
            </div>

            <div className="card-actions justify-end">
              <button className={`btn ${mode}  bg-base `}>
                <Link
                  to={`/monsters/${monster.id}`}
                  className={`text ${mode}  text-accent`}
                >
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
