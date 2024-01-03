import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import ModalAlert from './components/ModalAlert'

function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [activeCreate, setActiveCreate] = useState(false)
  const [alert, setAlert] = useState(false)
  

  const baseUrl = 'https://users-crud.academlo.tech/swagger/?format=openapi'

  const [users, getUsers, createUser, deleteUsers, updateUsers, statusAlert, setStatusAlert ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  const activeModal = () => {
    setActiveCreate(true)

  }


  return (
    <div className='container_principal'>
      <div className='container_header'>
        <h1 className='title'>Users <i class='bx bx-user'></i></h1>
        <button className='btn_create' onClick={activeModal}><i class='bx bx-plus'></i> Create new user</button>
      </div>
      <div className={`${activeCreate ? 'active_formuser_container' : 'formuser_container'}`}>
        <div className='container_create'>
          <FormUser 
            createUser={createUser}
            infoUpdate={infoUpdate}
            updateUsers={updateUsers}
            setInfoUpdate={setInfoUpdate}
            setActiveCreate={setActiveCreate}
          />
        </div>

      </div>

      <ModalAlert 
        alert={alert}
        setAlert={setAlert}
        statusAlert={statusAlert}
        setStatusAlert={setStatusAlert}
        
      />
      

      <div className='card_users'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setInfoUpdate={setInfoUpdate}
              setActiveCreate={setActiveCreate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
