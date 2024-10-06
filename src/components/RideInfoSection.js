// src/components/RideInfoSection.js
import React from 'react';

const RideInfoSection = () => {
  return (
    <section className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Rit Informatie</h2>
      <p>
        Om mee te rijden op onze IJslanders moet u aan de volgende voorwaarden voldoen:
      </p>
      <ul className="list-disc ml-8">
        <li>Maximaal 80 KG</li>
        <li>Minimaal een jaar rijles gehad of andere paardrij-ervaring</li>
        <li>30 minuten voor de rit aanwezig zodat we een bijpassend paard voor u kunnen kiezen</li>
        <li>De ritten worden gereden op eigen risico</li>
      </ul>
    </section>
  );
};

export default RideInfoSection;

