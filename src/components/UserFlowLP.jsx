import React from "react";

const UserflowLP = () => (
  <section id="userflow">
    <h2 className="text-3xl font-semibold my-4 text-center text-blue-700 mt-12">Userflow</h2>
    <div className="flex flex-col items-start">
      <a href="image/mockup-gula.svg" target="_blank" rel="noopener noreferrer">
        <img src="image/mockup-gula.svg" alt="User Flow" className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300" />
      </a>
    </div>
    <div className="flex flex-col items-start mt-12">
      <a href="image/mockup-gula2.svg" target="_blank" rel="noopener noreferrer">
        <img src="image/mockup-gula2.svg" alt="User Flow" className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300" />
      </a>
      <a className="text-blue-600 underline mb-10" href="https://www.figma.com/design/bRWTzsADrlXXqyDdrOwATa/IMK-LOMBA?node-id=1-8&t=5LVtieLalHVGfNN9-1">
        Detail Mockup
      </a>
    </div>
  </section>
);

export default UserflowLP;