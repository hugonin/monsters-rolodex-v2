import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

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
  const url = "http://localhost:3000/monsters/" + id;
  const { data: monster, isPending, error } = useFetch(url);
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {monster && (
        <>
          <div class={`card container mx-auto w-96 mt-12 mb-12  bg-primary `}>
            <figure>
              <img
                src={`https://robohash.org/${monster.id}?set=set2`}
                alt="Robot monsters"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class={`card-title  text-accent`}>{monster.name}</h2>
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
                {monster.address.street} - {monster.address.suite} -{" "}
                {monster.address.city} - {monster.address.zipcode}{" "}
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
                {monster.company.name}
              </div>
              <p>{monster.company.catchPhrase}</p>
              <p>{monster.company.bs}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
