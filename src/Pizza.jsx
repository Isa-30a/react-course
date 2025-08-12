// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };
// this export here will do import {Pizza} from "./Pizza"
//export const Pizza .....
const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img
        src={props.image ? props.image : "https://picsum.photos/200"}
        alt={props.name}
      />
    </div>
  );
};

// this default here will do import Pizza from "./Pizza"

export default Pizza;
