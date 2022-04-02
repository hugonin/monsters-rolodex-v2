import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";

export default function Create() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressSuite, setAddressSuite] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressZipcode, setAddressZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyCatchPhrase, setCompanyCatchPhrase] = useState("");
  const [companybs, setCompanyBs] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/monsters",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      name,
      username,
      email,
      addressStreet,
      addressSuite,
      addressCity,
      addressZipcode,
      phone,
      website,
      companyName,
      companyCatchPhrase,
      companybs,
      image,
    });
  };

  // redirect the user when we get data response
  useEffect(() => {
    if (data) {
      navigate("/ ");
    } else if (error) {
      console.log(error);
    }
  }, [data, navigate, error]);

  return (
    <div className="container mx-auto px-8 my-12">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-accent">
                Add a new monster
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Username:
                      </label>
                      <input
                        type="text"
                        name="user-name"
                        id="user-name"
                        autoComplete="user-name"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Avatar
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          onClick={(e) => setImage(e.target.value)}
                          value={`https://robohash.org/${image.id}?set=set2`}
                          type="button"
                          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address:
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address:
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        onChange={(e) => setAddressStreet(e.target.value)}
                        value={addressCity}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City:
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        onChange={(e) => setAddressCity(e.target.value)}
                        value={addressCity}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Suite:
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        onChange={(e) => setAddressSuite(e.target.value)}
                        value={addressSuite}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code:
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        onChange={(e) => setAddressZipcode(e.target.value)}
                        value={addressZipcode}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone:
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website:
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          onChange={(e) => setWebsite(e.target.value)}
                          value={website}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Address:
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        autoComplete="company-name"
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="company-catchphrase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Catch Phrase:
                      </label>
                      <input
                        type="text"
                        name="catch-phrase"
                        id="catch-phrase"
                        autoComplete="company-level2"
                        onChange={(e) => setCompanyCatchPhrase(e.target.value)}
                        value={companyCatchPhrase}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="company-bs"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bs:
                      </label>
                      <input
                        type="text"
                        name="company-bs"
                        id="company-bs"
                        autoComplete="company-level1"
                        onChange={(e) => setCompanyBs(e.target.value)}
                        value={companybs}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
