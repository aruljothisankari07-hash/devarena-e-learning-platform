import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

function UploadNotes() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const uploadPDF = async () => {
    if (!file) {
      alert("Select a PDF first");
      return;
    }

    try {
      const storageRef = ref(storage, `notes/${file.name}`);

      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);

      setUrl(downloadURL);

      alert("✅ PDF Uploaded Successfully");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="dashboard-main">

      <h1>📄 Upload Notes</h1>

      <div className="dashboard-card">

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        <button
          className="login-btn"
          onClick={uploadPDF}
        >
          Upload PDF
        </button>

        {url && (
          <>
            <br /><br />

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              📄 View Uploaded PDF
            </a>
          </>
        )}

      </div>

    </div>
  );
}

export default UploadNotes;