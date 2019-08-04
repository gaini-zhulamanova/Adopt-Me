// create a component
const App = () => {
    // create a div and inside a h1
    return React.createElement(
        "div",
        { id: "something-important" },
        React.createElement("h1", {}, "Adopt Me!")
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);