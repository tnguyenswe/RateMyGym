function StarIcon(props) {
  const { fill = 'none' } = props; //to control the fill color
  return /*#__PURE__*/(
    React.createElement("svg", { class: "w-6 h-6", fill: fill, stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" })) //got from heroicons
  );
}

function StarRating(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating } =
  props; //props to control the rating 
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'red';
    } else if (!hoverRating && rating >= index) {
      return 'red';
    }
    return 'none';
  }, [rating, hoverRating, index]);
  return /*#__PURE__*/(
    React.createElement("div", {
      className: "cursor-pointer",
      onMouseEnter: () => onMouseEnter(index),
      onMouseLeave: () => onMouseLeave(),
      onClick: () => onSaveRating(index) }, /*#__PURE__*/
    React.createElement(StarIcon, { fill: fill })));


}

// They don't necessarily need to take props
// This one also has an explicit return
const App = () => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = index => {
    setHoverRating(index); //where ever the mouse is hovering
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = index => {
    setRating(index); //set the real rating to whatever the mouse pointer clicks on
  };
  return /*#__PURE__*/(
    React.createElement("div", { className: "box flex" },
    [1, 2, 3, 4, 5].map(index => {//creating 5 rating icons
      return /*#__PURE__*/(
        React.createElement(StarRating, {
          index: index,
          rating: rating,
          hoverRating: hoverRating,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          onSaveRating: onSaveRating }));

    }), /*#__PURE__*/
    React.createElement("p", null, " ", rating)));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));