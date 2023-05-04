import { useState, useEffect } from "react";

function App() {
  const [repos, setRepos] = useState(20);

  useEffect(() => {
    fetch("https://api.github.com/users/rayorole")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.public_repos);
      });
  }, [repos]);

  return (
    <main>
      <div className="mt-6 max-w-screen-lg md:flex mx-auto">
        <div className="md:w-1/3 p-2 relative">
          <div className="md:fixed">
            <div className="md:block">
              <img
                className="h-32 w-32 rounded-full mx-auto"
                src="https://avatars.githubusercontent.com/u/87602506?v=4"
              />
              <div className="mb-12 text-center mt-4 justify-center items-center">
                <h1 className="text-2xl text-gray-800 font-bold">Ray Orolé</h1>
                <div className="md:text-lg text-gray-600">
                  Backend Developer
                </div>
                <div className="text-xs text-gray-500">
                  &minus; {repos} Public repositories &minus;
                </div>
                <div className="text-gray-600 md:hidden mt-1">
                  (ray.orole@gmail.com)
                </div>
              </div>
            </div>
            <div className="mx-4 my-4 hidden md:block">
              <div className="my-5 text-lg text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"></path>
                    <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z"></path>
                  </svg>
                </div>
                ray.orole@gmail.com
              </div>
              <div className="my-5 text-lg text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    className="text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"></path>
                    <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"></path>
                  </svg>
                </div>
                Kessel, Belgium
              </div>
              <a
                href="https://github.com/rayorole"
                className="my-5 text-lg text-gray-600 flex"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                Github
              </a>
            </div>
            <div className="mx-4 hidden md:block space-y-2">
              <a
                href="mailto:ray.orole@gmail.com"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out w-full py-2 text-white rounded text-base"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Summary</h1>
            <p className="text-lg">
              Enthusiastically explore new technologies for efficiency, always
              looking for ways to solve the problem as efficiently as possible,
              giving priority simplicity of code.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">
              Experience
            </h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  IT Student
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      Sint Ursula Instituut, Lier
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600">
                      Sept 2021 - Present
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Full Stack Developer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      Absolute Solutions BV.
                      <br />
                      <a
                        href="https://www.absolutesolutions.be/"
                        className="text-blue-400"
                      >
                        https://www.absolutesolutions.be/
                      </a>
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600">
                      Feb 2022 - Mar 2023
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  IT Support Internship
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">XX. BvBa</small>
                  </div>
                  <div className="">
                    <i className="bx bx-calendar"></i>
                    <small className="text-sm text-gray-600">1 Month</small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  Full stack Developer, DB architect and DevOps
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      Etherspay
                      <br />
                      <a
                        href="https://www.etherspay.com/"
                        className="text-blue-400"
                      >
                        https://www.etherspay.com/
                      </a>
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600">
                      Feb 2022 - Present
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Skills</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Python
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Django
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  PHP
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Nginx / OpenResty
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Docker
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Typescript
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ExpressJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Code Principles
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  System Analysis
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ReactJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  TailwindCSS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Sass
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Mail Server
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Mysql/MariaDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MonggoDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Linux Sysadmin
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Networking
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  NextJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  CI/CD
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Stripe
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Solidity
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Web3.js
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span className="fixed bottom-2 right-2 font-medium text-gray-500 text-sm">
        Made with Vite React + Tailwindcss
      </span>
    </main>
  );
}

export default App;
