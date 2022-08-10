import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-stone-700">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-x-6 px-6 text-white">
        <h1 className="mr-auto text-center text-2xl font-bold">
          Pizzeria Forte
        </h1>
        <div className="flex items-center gap-x-6">
          <Link className="underline-offset-4 hover:underline" to="/">
            Bestill
          </Link>
          <Link
            className="underline-offset-4 hover:underline"
            to="/mine-bestillinger"
          >
            Mine Bestillinger
          </Link>
          {/*TODO: Auth */}
          <Button variant="secondary">Logg inn</Button>
        </div>
      </div>
    </header>
  );
}
