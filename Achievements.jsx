import "./Achievements.css";

function Achievements() {

  const badges = [
    {
      icon: "🥉",
      title: "Bronze Badge",
      desc: "Complete your first course",
      status: "Unlocked",
    },
    {
      icon: "🥈",
      title: "Silver Badge",
      desc: "Complete 5 Courses",
      status: "Locked",
    },
    {
      icon: "🥇",
      title: "Gold Badge",
      desc: "Reach 1000 XP",
      status: "Locked",
    },
    {
      icon: "💎",
      title: "Diamond Badge",
      desc: "Complete All Courses",
      status: "Locked",
    },
    {
      icon: "🔥",
      title: "Streak Master",
      desc: "7 Days Login Streak",
      status: "Locked",
    },
  ];

  return (

    <div className="achievement-page">

      <h1>🏆 Achievements</h1>

      <p className="achievement-subtitle">
        Unlock badges by learning and completing challenges.
      </p>

      <div className="achievement-grid">

        {badges.map((badge, index) => (

          <div className="achievement-card" key={index}>

            <div className="badge-icon">
              {badge.icon}
            </div>

            <h2>{badge.title}</h2>

            <p>{badge.desc}</p>

            <button
              className={
                badge.status === "Unlocked"
                  ? "unlock-btn"
                  : "lock-btn"
              }
            >
              {badge.status}
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Achievements;