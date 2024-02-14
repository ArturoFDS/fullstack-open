import { useSelector } from "react-redux";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const notificationMessage = useSelector((state) => state.notificationMessage);
  return <div style={style}>{notificationMessage}</div>;
};

export default Notification;
