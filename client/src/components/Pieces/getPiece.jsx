import { TestPiece } from './TestPiece';
import { WhiteQueen, BlackQueen } from './Queen';
import { WhitePawn, BlackPawn } from './Pawn';
import { WhiteKing, BlackKing } from './King';
import { WhiteRook, BlackRook } from './Rook';
import { WhiteKnight, BlackKnight } from './Knight';
import { WhiteBishop, BlackBishop } from './Bishop';

const getPiece = (pieceName, height, width) => {
  switch (pieceName) {
    case 'BlackPawn':
      return <BlackPawn height={height} width={width} />;
    case 'BlackQueen':
      return <BlackQueen height={height} width={width} />;
    case 'BlackKing':
      return <BlackKing height={height} width={width} />;
    case 'BlackBishop':
      return <BlackBishop height={height} width={width} />;
    case 'BlackRook':
      return <BlackRook height={height} width={width} />;
    case 'BlackKnight':
      return <BlackKnight height={height} width={width} />;
    case 'WhitePawn':
      return <WhitePawn height={height} width={width} />;
    case 'WhiteQueen':
      return <WhiteQueen height={height} width={width} />;
    case 'WhiteKing':
      return <WhiteKing height={height} width={width} />;
    case 'WhiteBishop':
      return <WhiteBishop height={height} width={width} />;
    case 'WhiteRook':
      return <WhiteRook height={height} width={width} />;
    case 'WhiteKnight':
      return <WhiteKnight height={height} width={width} />;
    case 'TestPiece':
      return <TestPiece height={height} width={width} />;
    default:
      return undefined;
  }
};

export default getPiece;
