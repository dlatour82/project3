import "./styles.css";
import { useState, useEffect } from "react";
import Entry from "./Entry";
import Message from "./Message";
import Title from "./Title";
import pokemonBanner from "./pokemonBanner.jpg";
import eeveenb from "./eeveenb.png";
import Footer from "./Footer";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const pokeName = encodeURIComponent(name);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, [name]);

  return (
    <div className="App">
      <div className="header">
        {" "}
        <Title text="Enter the name of a Pokemon" />
        <img src={pokemonBanner} alt="pokemon banner" />
      </div>
      <div className="left">
        <div className="eevee">
          <img src={eeveenb} alt="eevee" />
        </div>
      </div>
      <div className="middle">
        <Entry action={setName} />
        <Message name={name} data={data} text1="Name: " text2="Type: " />
      </div>
      <div className="right">
        <div className="eevee">
          <img src={eeveenb} alt="eevee" />
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
