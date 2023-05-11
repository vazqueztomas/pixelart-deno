import PixelGrid from "../components/PixelGrid.tsx";
import ColorPicker from "../components/ColorPicker.tsx";
import { useState } from "preact/hooks";
const Pixels = () => {
  const [colorSelected, setColorSelected] = useState(0);

  console.log(colorSelected);
  return (
    <>
      <PixelGrid colorSelected={colorSelected} />
      <ColorPicker setColorSelected={setColorSelected} />
    </>
  );
};

export default Pixels;
