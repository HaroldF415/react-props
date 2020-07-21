import React from "react";

import Header from "./Header";
import Card from "./Card";
import contacts from "./../contacts";

function App() {
  return (
    <div>
      <Header />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
