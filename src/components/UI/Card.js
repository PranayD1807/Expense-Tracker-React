import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;

// chilren -> inside of Tags (other divs inside it etc)
