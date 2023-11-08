import React from "react";
import background from "../img/home_background.JPG"
import Cards from "./Cards";
import Maps from "./Maps";
import "./Home.css"

export default function Home() {
  return (
    <main>
      <section className="relative homePage">
        <img src={background} alt="Gîte Oustal de Marie" className="home_image object-cover w-full" />
        <div className="absolute top-0 home_text">
          <h1 className="text-6xl text-white">Bienvenue à L'oustal de Marie</h1>
          <h2 className="text-4xl text-white">Gîte en Ariège</h2>
        </div>
      </section>
      <section className="homeCards mt-16">
        <Cards />
      </section>

      <section className="homeBaniere">
        <img src="https://images.unsplash.com/photo-1569077251332-3c0293ae7d12?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gîte en ariège" className="object-cover w-full banner"/>
      </section>

      <section className="emplacement">
        <Maps />
      </section>

    </main>

  )
}
