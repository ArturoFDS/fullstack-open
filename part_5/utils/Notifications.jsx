const NotificationModel = ({ message, type }) => {
  if (type === 'warning') {
    return (
      <div
        style={{
          border: '10px yellow dashed',
          width: '100%',
          backgroundColor: 'gray',
          padding: '40px',
          fontSize: '30px',
          textAlign: 'center'
        }}
      >
        <span
          style={{
            color: 'yellow'
          }}
        >
          {message}
        </span>
      </div>
    )
  }
  if (type === 'error') {
    return (
      <div
        style={{
          border: '10px red dashed',
          width: '100%',
          padding: '40px',
          fontSize: '30px',
          textAlign: 'center'
        }}
      >
        <span
          style={{
            color: 'red'
          }}
        >
          {message}
        </span>
      </div>
    )
  }
  if (type === 'success') {
    return (
      <div
        style={{
          border: '10px green dashed',
          width: '100%',
          padding: '40px',
          fontSize: '30px',
          textAlign: 'center'
        }}
      >
        <span
          style={{
            color: 'green'
          }}
        >
          {message}
        </span>
      </div>
    )
  }
  return <div>NotificationModel</div>
}

export default NotificationModel
