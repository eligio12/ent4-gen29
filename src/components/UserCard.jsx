import "./styles/UserCard.css"

const UserCard = ({user, deleteUsers, setInfoUpdate, setActiveCreate}) => {

const handleDelete = () => {
    deleteUsers("/users", user.id)
}

const handleEdit = () => {
    setInfoUpdate(user)
    setActiveCreate(true)
}


  return (
    <article className="card">
      <h3 className="card_title">{`${user.first_name} ${user.last_name}`}</h3>
      <hr className="separator"/>
      <ul className="card_items">
        <li className="card_item">Email: <span> <i class='bx bxs-envelope'></i> {user.email}</span></li>
        <li className="card_item">Birthday: <span><i class='bx bx-calendar'></i> {user.birthday}</span></li>
      </ul>
      <hr className="separator"/>
      <div className="card_buttons">
        <button onClick={handleDelete} className="delete_btn"><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit} className="edit_btn"><i className='bx bx-edit' ></i></button>
      </div>
    </article>
  )
}

export default UserCard