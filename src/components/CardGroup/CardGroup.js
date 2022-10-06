import CardSingle from "../CardSingle/CardSingle";
import "./CardGroup.css";

const CardGroup = ({ jokes }) => {
  return (
    <div className="card-group">
      {jokes?.map((joke) => (
        <CardSingle key={joke.id} joke={joke}></CardSingle>
      ))}
    </div>
  );
};

export default CardGroup;
