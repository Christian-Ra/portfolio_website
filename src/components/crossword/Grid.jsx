export const Grid = () => {
  const board = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));

  const puzzle = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));
  return (
    <div className="container">
      <table className="crossword-grid">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isBlank = puzzle[rowIndex][cellIndex] !== null;
                return (
                  <td key={cellIndex} className={isBlank ? "blank" : "empty"}>
                    <input
                      type="text"
                      maxLength={1}
                      value={cell === null ? "" : cell}
                      onFocus={() => {}}
                      onChange={() => {}}
                      onClick={() => {}}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
