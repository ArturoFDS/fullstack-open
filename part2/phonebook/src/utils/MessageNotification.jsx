const MessageNotification = ({ message, type }) => {
  const errorStyle = {
    color: "red",
    bgColor: "gray",
    border: "4px black dashed",
  };

  const successStyle = {
    color: 'green',
    bgColor: 'white',
    border: '4px black dashed'
  }

  const warnStyle = {
    color: 'yellow',
    bgColor: 'black',
    border: '4px black dashed'
  }
  if (type === "error") {
    return (
      <div className="error" style={errorStyle}>
        <h2> {message} </h2>
      </div>
    );
  } else if (type === "success") {
    return (
      <div className="success" style={successStyle}>
        <h2> {message} </h2>
      </div>
    );
  } else if (type === "warn") {
    return (
      <div className="warn" style={warnStyle}>
        <h2> {message} </h2>
      </div>
    );
  }
  return null;
};

export default MessageNotification;
