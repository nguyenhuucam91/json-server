import React, { useEffect } from "react"
import axiosClient from "./api/axiosClient"
import routes from "./routes"

const User = () => {

  const [users, setUsers] = React.useState([]) 

  const handleEdit = (id) => { 
    // axios.put(`/users/${id}`, {
    //   name: 'camnh',
    //   phone_number: '0348921193',
    // })
  }

  useEffect(() => { 
    // Fetch danh sách users
    async function fetchUsers() {
      const data = await axiosClient.get(routes.api.users.list)
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone number</th>
          </tr>
      </thead>
      <tbody>
        {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone_number}</td>
              <td><button onClick={() => handleEdit(user.id)}>Edit</button></td>
            </tr>
        ))}
      </tbody>
      </table>
  )
}

export default User