import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/leaderboard"
      );

      setUsers(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  return (
    <div className="dashboard-main">
      <h1>🏆 Leaderboard</h1>

      <div className="dashboard-card">

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Email</th>
              <th>XP</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{getMedal(index)}</td>
                <td>{user.name || "Developer"}</td>
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

export default Leaderboard;