import { COLORS } from "../shared/consts.ts";
import { Signal } from "@preact/signals";

// deno-lint-ignore no-explicit-any
export default function ColorPicker({ setColorSelected }: any) {
  return (
    <div class="flex gap-8 justify-center">
      <div class={`grid grid-cols-${COLORS.length} gap-x-2`}>
        {COLORS.map((color, index) => (
          <button
            onClick={() => setColorSelected(index)}
            class={`w-8 h-8 bg-[${color}]`}
          />
        ))}
      </div>
    </div>
  );
}
