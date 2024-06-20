import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";

const Form = () => {
  const [name, setName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [game, setGame] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [rules, setRules] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async() => {
    try {
        await addDoc(collection(database, "Tournaments"), {
          name,
          organizer,
          game,
          date,
          type,
          rules,
        });
        alert("Tournament created!");
        navigate("/tournamentApp");
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error creating tournament");
      }
  };

  return (
    <div
      style={{
        textAlign: "left",
        padding: "10px",
        border: "2px solid black",
        borderRadius: "5px",
        width: "fit-content",
        margin: "auto",
        backgroundColor: 'gainsboro',
        
      }}
    >
      <label for="Name">Name of tournment:</label>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <label>Name of Organiser: </label>
      <input
        type="text"
        required
        value={organizer}
        onChange={(e) => setOrganizer(e.target.value)}
      ></input>
      <br />
      <label>Game for the tournament:</label>
      <input
        type="text"
        required
        value={game}
        onChange={(e) => setGame(e.target.value)}
      ></input>
      <br />
      <label>Date of Tournament:</label>
      <input
        type="date"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <br />
      <label>Tournment type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Round robin">Round robin</option>
        <option value="Knockout">Knockout</option>
      </select>
      <br />
      <label>Rules:</label>
      <textarea
        placeholder="eg: Single entry per participant"
        value={rules}
        onChange={(e) => setRules(e.target.value)}
      ></textarea>
      <br />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
