import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, PencilIcon } from "@heroicons/react/outline";
import { useTheme } from "../hooks/useTheme";

export default function Dropdown() {
  const { mode } = useTheme();
  return (
    <>
      <Menu as="div">
        <Menu.Button>
          <label
            tabindex="0"
            class={`btn ${mode} bg-base btn-ghost btn-circle`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-10 left-1  w-56 mt-2 origin-top-right ${mode} bg-base divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={`${
                      active
                        ? ` ${mode} bg-primary text-accent`
                        : ` ${mode} text-accent`
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <HomeIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <HomeIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Home
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/create"
                    className={`${
                      active
                        ? ` ${mode} bg-primary text-accent`
                        : ` ${mode} text-accent`
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <PencilIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <PencilIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Create
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
