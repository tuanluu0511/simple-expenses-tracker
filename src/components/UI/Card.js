import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className; //Need space to work

  return <div className={classes}>{props.children}</div>;
}

export default Card;
