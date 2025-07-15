// const Pizza = (props) => {
//     return React.createElement("div",null, [
//         React.createElement("h1", null, props.name),
//         React.createElement("p", null, props.description)
//     ]);
// };

const Pizza = (props) => {
    return (
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />
        </div>
    );
};

export default Pizza;