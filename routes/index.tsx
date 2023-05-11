import { Head } from "$fresh/runtime.ts";
import Pixels from "../islands/Pixels.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixelart</title>
      </Head>
      <main class="bg-gray-900 min-h-screen flex justify-center items-center">
        <div class="p-4 mx-auto max-w-screen-md flex flex-col gap-4">
          <Pixels />
        </div>
      </main>
    </>
  );
}
