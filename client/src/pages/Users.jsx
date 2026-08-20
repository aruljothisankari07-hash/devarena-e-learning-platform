import { useEffect, useState } from "react";
import axios from "axios";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {

      const res = await axios.get(
        "https://devarena-e-learning-platform.onrender.com/api/leaderboard"
      );

      setUsers(res.data.users);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-main">

      <h1>👨‍🎓 Registered Users</h1>

      <div className="dashboard-card">

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>XP</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user._id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.xp}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Users;