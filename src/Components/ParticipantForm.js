import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const ParticipantForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamLeader, setTeamLeader] = useState("");
  const [teamMember1, setTeamMember1] = useState("");
  const [teamMember2, setTeamMember2] = useState("");
  const [teamMember3, setTeamMember3] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const q = query(
        collection(database, "Tournaments"),
        where("name", "==", tournamentName)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const tournamentDoc = querySnapshot.docs[0];
        const tournamentId = tournamentDoc.id;

        await addDoc(
          collection(database, "Tournaments", tournamentId, "participants"),
          {
            name,
            phone,
            teamName,
            teamLeader,
            teamMember1,
            teamMember2,
            teamMember3,
          }
        );

        alert("Tournament joined!");
        navigate("/tournamentApp");
      } else {
        alert("Tournament not found!");
      }
    } catch (e) {
      console.error("Error adding participant: ", e);
      alert("Error joining tournament");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px",
          alignItems: "center",
          textAlign: "left",
          border: "2px solid black",
          borderRadius: "5px",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <label htmlFor="name">Name of participant:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <label htmlFor="tournamentName">Enter the name of tournament:</label>
        <input
          type="text"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
          required
        />
        <br />
        <label>Team Name:</label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <br />
        <label>Team Leader:</label>
        <input
          type="text"
          value={teamLeader}
          onChange={(e) => setTeamLeader(e.target.value)}
        />
        <br />
        <label>Team Member1:</label>
        <input
          type="text"
          value={teamMember1}
          onChange={(e) => setTeamMember1(e.target.value)}
        />
        <br />
        <label>Team Member2:</label>
        <input
          type="text"
          value={teamMember2}
          onChange={(e) => setTeamMember2(e.target.value)}
        />
        <br />
        <label>Team Member3:</label>
        <input
          type="text"
          value={teamMember3}
          onChange={(e) => setTeamMember3(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ParticipantForm;
