import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // create a hook: current location, update Location. Hooks always habe "useSomething"
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          ></select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
