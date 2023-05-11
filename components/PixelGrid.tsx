import { useState } from "preact/hooks";
import {
  COLORS,
  DESKTOP_PIXEL_SIZE,
  HEIGHT,
  PIXEL_SIZE,
  WIDTH,
} from "../shared/consts.ts";

const initialTiles = Array.from({ length: WIDTH * HEIGHT }).fill("#ffffff");
// deno-lint-ignore no-explicit-any
const PixelGrid = ({ colorSelected }: any) => {
  const [tiles, updateTiles] = useState(initialTiles);

  const handleClick = () => {
  };
  return (
    <div
      class={`
    border border-white 
    grid grid-cols-${WIDTH} w-[${WIDTH * PIXEL_SIZE}px]
    h-[${HEIGHT * PIXEL_SIZE}px] sm:h-[${HEIGHT * DESKTOP_PIXEL_SIZE}px]
    sm:w-[${WIDTH * DESKTOP_PIXEL_SIZE}px]`}
    >
      {tiles.map((tile, index) => (
        <div
          onClick={() => {
            updateTiles((tiles) => {
              const newTiles = [...tiles];
              newTiles[index] = COLORS[colorSelected];
              return newTiles;
            });
          }}
          class={`w=[${PIXEL_SIZE}px] h-[${PIXEL_SIZE}px] 
          sm:w-[${DESKTOP_PIXEL_SIZE}px] sm:h-[${DESKTOP_PIXEL_SIZE}px]
          bg-[${tile}]`}
        >
        </div>
      ))}
    </div>
  );
};

export default PixelGrid;
