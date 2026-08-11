import { jsPDF } from "jspdf";

function Certificate() {

  const user = JSON.parse(localStorage.getItem("user"));

  const userName =
    user?.name ||
    user?.email ||
    "DevArena Student";

  const courseName =
    localStorage.getItem("completedCourse") ||
    "MERN Stack Development";

  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const certificateId =
    "DEV-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(100000 + Math.random() * 900000);

  const downloadCertificate = () => {

    const doc = new jsPDF("landscape");

    // Gold Border
    doc.setDrawColor(212,175,55);
    doc.setLineWidth(4);
    doc.rect(10,10,277,190);

    // Inner Border
    doc.setDrawColor(120,120,120);
    doc.setLineWidth(1);
    doc.rect(15,15,267,180);

    // Logo
    doc.setFontSize(34);
    doc.setTextColor(30,64,175);
    doc.text("🎮 DevArena",105,30);

    <div
style={{
  width: "220px",
  margin: "auto",
  padding: "12px",
  background: "#1e40af",
  color: "#ffffff",
  borderRadius: "50px",
  fontWeight: "700",
  fontSize: "16px",
  border: "2px solid #d4af37",
  boxShadow: "0 6px 18px rgba(0,0,0,.2)",
  marginBottom: "20px"
}}
>
⭐ OFFICIAL CERTIFICATE ⭐
</div>

    // Heading
    doc.setFontSize(28);
    doc.setTextColor(0,0,0);
    doc.text("CERTIFICATE OF COMPLETION",58,50);

    doc.setFontSize(16);
    doc.text(
      "This Certificate is Proudly Presented To",
      82,
      70
    );

    // Student Name
    doc.setFontSize(30);
    doc.setTextColor(220,38,38);
    doc.text(userName,95,95);

    doc.setFontSize(17);
    doc.setTextColor(0,0,0);

    doc.text(
      "For Successfully Completing",
      92,
      115
    );

    // Course Name
    doc.setFontSize(24);
    doc.setTextColor(22,163,74);
    doc.text(courseName,75,135);

    <p
  style={{
    marginTop: "25px",
    fontSize: "18px",
    color: "#475569",
    lineHeight: "32px"
  }}
>
In recognition of outstanding dedication,
successful completion of the learning program,
and demonstration of practical skills in
Full Stack Development.
</p>

    // Date
    doc.setFontSize(15);
    doc.setTextColor(0,0,0);
    doc.text(
      "Date : " + today,
      20,
      170
    );

    // Certificate ID
    doc.text(
      "Certificate ID : " + certificateId,
      20,
      180
    );

    // Signature
    doc.setFont("times","italic");
    doc.setFontSize(22);
    doc.text(
      "A. Kumar",
      25,
      175
    );

    doc.setFont("helvetica","normal");
    doc.setFontSize(13);

    doc.line(20,178,70,178);

    doc.text(
      "Instructor Signature",
      18,
      186
    );

    // Seal
    doc.setDrawColor(212,175,55);
    doc.circle(245,170,18);

    doc.setFontSize(14);

    doc.text(
      "DevArena",
      234,
      168
    );

    doc.text(
      "Official",
      236,
      176
    );

    doc.save(`${courseName}-Certificate.pdf`);

  };

  const printCertificate = () => {
    window.print();
  };
  return (

  <div className="dashboard-main">

    <div
      className="certificate-box"
      style={{
  maxWidth: "1100px",
  margin: "40px auto",
  padding: "60px",
  background: "#ffffff",
  border: "10px solid #d4af37",
  borderRadius: "25px",
  boxShadow: "0 15px 40px rgba(0,0,0,.25)",
  color: "#111827",
  textAlign: "center",
  position: "relative"
}}
    >
      <div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "130px",
    fontWeight: "bold",
    color: "rgba(30,64,175,0.05)",
    pointerEvents: "none",
    userSelect: "none"
  }}
>
  DevArena
</div>

      {/* Logo */}

      <h1
        style={{
          color: "#1e40af",
          fontSize: "50px",
          fontWeight: "bold"
        }}
      >
        🎮 DevArena
      </h1>

      <p
        style={{
          color: "#64748b",
          letterSpacing: "5px",
          fontWeight: "600"
        }}
      >
        CERTIFICATE OF COMPLETION
      </p>

      <br />

      <h2
        style={{
          fontSize: "20px",
          color: "#374151"
        }}
      >
        This Certificate is Proudly Presented To
      </h2>

      <h1
        style={{
          fontSize: "52px",
          color: "#dc2626",
          marginTop: "25px",
          fontFamily: "cursive"
        }}
      >
        {userName}
      </h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "19px"
        }}
      >
        For Successfully Completing
      </p>

      <h2
        style={{
          color: "#16a34a",
          fontSize: "35px",
          marginTop: "10px"
        }}
      >
        {courseName}
      </h2>

      <br />

      <p
        style={{
          fontSize: "18px",
          color: "#475569"
        }}
      >
        Awarded on
      </p>

      <h3
        style={{
          color: "#2563eb"
        }}
      >
        📅 {today}
      </h3>

      <p
        style={{
          marginTop: "8px",
          color: "#64748b"
        }}
      >
        Certificate ID : <b>{certificateId}</b>
      </p>

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "70px"
        }}
      >

        {/* Signature */}

        <div
          style={{
            textAlign: "center"
          }}
        >

          <img
            src="/signature.png"
            alt="Signature"
            style={{
              width: "180px",
              height: "70px",
              objectFit: "contain"
            }}
          />

          <hr />

          <h4>Instructor</h4>

          <p>DevArena Academy</p>

        </div>

        {/* Seal */}

        <div
          style={{
            width: "150px",
            height: "150px",
            border: "6px solid gold",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
           background:"#fff",
            color: "#b8860b",
            fontWeight: "bold",
            boxShadow: "0 0 15px rgba(212,175,55,.6)"
          }}
        >

          🏅

          <span>Official</span>

          <span>Seal</span>

        </div>

        <div
style={{
fontSize:"55px"
}}
>
🥇
</div>

      </div>

      <br />
      <br />

      <button
        className="login-btn"
        onClick={downloadCertificate}
      >
        ⬇ Download PDF
      </button>

      <button
        className="login-btn"
        style={{
          marginLeft: "15px",
          background: "#2563eb"
        }}
        onClick={printCertificate}
      >
        🖨 Print
      </button>

      <hr
  style={{
    marginTop: "40px"
  }}
/>

<p
  style={{
    color: "#1e40af",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "15px"
  }}
>
  🔗 Verify this certificate at

  <span
    style={{
      color: "#f59e0b",
      marginLeft: "6px",
      fontWeight: "bold"
    }}
  >
    devarena.com/verify
  </span>
</p>

    </div>

  </div>

);

}

export default Certificate;