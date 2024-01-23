const DeleteButton = ({onClickFunction}) => {
  return (
    <div>
        <button onClick={onClickFunction}>
            Delete Person
        </button>
    </div>
  )
}

export default DeleteButton