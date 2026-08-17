import { useEffect, useState } from "react";

function RecentActivity() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("activities")) || [];

    setActivities(data);

  }, []);

  return (

    <div className="dashboard-card">

      <h2>📜 Recent Activity</h2>

      {activities.length === 0 ? (

        <p>No Activity Yet</p>

      ) : (

        activities.map((item, index) => (

          <div
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <p>{item}</p>
          </div>

        ))

      )}

    </div>

  );

}

export default RecentActivity;