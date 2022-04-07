import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import { projectFirestore } from "../firebase/config";

import {
  UserIcon,
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
  GlobeIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/solid";

export default function Card() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [monster, setMonster] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unSubscribe = projectFirestore
      .collection("monsters")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setMonster(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that monster");
        }
      });

    return () => unSubscribe();
  }, [id]);

 

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {monster && (
        <>
          <div
            className={`card container mx-auto w-96 mt-12 mb-12 ${mode} bg-primary `}
          >
            <figure>
              <img
                src={`https://robohash.org/${monster.id}?set=set2`}
                alt="Robot monsters"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className={`card-title ${mode} text-accent`}>
                {monster.name}
              </h2>
              <div className="flex">
                <UserIcon className="h-5 w-5 mx-2" />
                {monster.username}
              </div>
              <div className="flex">
                <MailIcon className="h-5 w-5 mx-2" />
                {monster.email}
              </div>
              <div className="flex">
                <LocationMarkerIcon className="h-5 w-5 mx-2" />
                {monster.addressStreet} - {monster.addressSuite} -{" "}
                {monster.addressCity} - {monster.addressZipcode}{" "}
              </div>
              <div className="flex">
                <PhoneIcon className="h-5 w-5 mx-2" />
                {monster.phone}
              </div>
              <div className="flex">
                <GlobeIcon className="h-5 w-5 mx-2" />
                {monster.website}
              </div>

              <div className="flex">
                <OfficeBuildingIcon className="h-5 w-5 mx-2" />
                {monster.companyName}
              </div>
              <p>{monster.companyCatchPhrase}</p>
              <p>{monster.companybs}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
