import { FC, useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import "@/App.css";

export const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-x-10">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            src={viteLogo}
            className="h-24	will-change-[filter] hover:drop-shadow-[0_0_2rem_#646cffaa]"
            alt="Logo of Vite"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            src={reactLogo}
            className="h-24	animate-spin-slow will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2rem_#61dafbaa]"
            alt="Logo of React"
          />
        </a>
      </div>
      <h1 className="text-6xl font-bold">Vite + React</h1>
      <div className="text-center space-y-6">
        <button
          className="rounded-md text-base bg-white px-6 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more.
      </p>
    </>
  );
};
