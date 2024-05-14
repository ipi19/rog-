import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkelton from "./GameCardSkelton";

const GameGrid = () => {
  const { games, error, IsLoading } = useGames();
  const skeltons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={10}
      >
        {IsLoading &&
          skeltons.map((skelton) => <GameCardSkelton key={skelton} />)}
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
