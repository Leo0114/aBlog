import { type Character } from "@constants/constants";

interface CaracterCardProps {
  character: Character;
}

const CaracterCard: React.FC<CaracterCardProps> = ({ character }) => {
  return (
    <div className="max-w-sm rounded shadow-lg p-4 bg-white   flex flex-col items-center justify-center">
      <img
        className=" h-32 md:h-48 w-fit drop-shadow-xl hover:scale-125 transition-all ease-in"
        src={character.image}
        alt={character.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{character.name}</div>
        <p className="text-gray-700 text-base">Race: {character.race}</p>
        <p className="text-gray-700 text-base">Ki: {character.ki}</p>
        <p className="text-gray-700 text-base">Max Ki: {character.maxKi}</p>
        <p className="text-gray-700 text-base">Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default CaracterCard;
