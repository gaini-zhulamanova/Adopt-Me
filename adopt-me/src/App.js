// create a component Pet
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

// create a component
const App = () => {
  // create a div and inside a h1
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Markiza",
      animal: "Dog",
      breed: "Collie"
    }),
    React.createElement(Pet, { name: "Gosha", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Parrot"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
