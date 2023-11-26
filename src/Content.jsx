import "./Content.css";
import { Hero } from "./Hero.jsx";
import { Box } from "./Box.jsx";
import { Cards } from "./Cards.jsx";

export function Content() {
  return (
    <>
      <main>
        <Hero></Hero>
        <Box></Box>
        <Cards></Cards>
      </main>
    </>
  );
}
