import { useContext } from 'react';
import PiecesRegistry from '../services/PiecesRegistry';

export default () => {
  const context = useContext(PiecesRegistry);

  return {
    getPiece: (pieceName) => context.factories[pieceName],
  };
};
