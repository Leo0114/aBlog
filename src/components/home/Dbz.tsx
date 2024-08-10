import { useState } from "react";
import { useDBZ } from "src/hooks/useDBZ";

import CaracterCard from "./CharacterCard";

const Dbz = () => {
  const [page, setPage] = useState(1);
  const { characters, loading, error, links } = useDBZ(page);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className=" py-6 lg:py-10">
      <div className="grid md:grid-cols-3  grid-cols-2 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <CaracterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="flex justify-between mt-4 pt-4 ">
        {links.previous && (
          <button
            className=" p-4 rounded-lg bg-secondary transition-all ease-in  hover:opacity-80"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
        )}
        {links.next && (
          <button
            className=" p-4 rounded-lg bg-secondary transition-all ease-in  hover:opacity-80"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Dbz;
