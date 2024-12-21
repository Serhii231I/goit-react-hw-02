const Options = ({ updateFeedback }) => {
  return (
    <div className="buttonsContainer">
      <button onClick={updateFeedback} className="button">
        Good
      </button>
      <button onClick={updateFeedback} className="button">
        Neutral
      </button>
      <button onClick={updateFeedback} className="button">
        Bad
      </button>
      <button onClick={updateFeedback} className="button">
        Reset
      </button>
    </div>
  );
};
export default Options;
