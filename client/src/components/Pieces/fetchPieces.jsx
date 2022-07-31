const fetchPieces = () => {
  return {
    pieces: [
      {
        name: 'BlackQueen',
        x: 0,
        y: 0,
        isSelected: false,
      },
      {
        name: 'BlackKing',
        x: 0,
        y: 1,
        isSelected: false,
      },
    ],
  };
};

export default fetchPieces;
