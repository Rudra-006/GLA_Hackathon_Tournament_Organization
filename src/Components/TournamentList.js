import { useState, useEffect } from "react";
import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const TournamentList = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "Tournaments"));
        const tournamentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTournaments(tournamentsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tournaments: ", error);
      }
    };

    fetchTournaments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Tournaments</h1>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id} style={{
            border: '2px solid black',
            width: '300px',
            margin: 'auto',
            padding: '10px',
            textAlign: 'left',
            backgroundColor: 'gainsboro'
          }}>
            <h2>{tournament.name}</h2>
            <p><strong>Organizer:</strong> {tournament.organizer}</p>
            <p><strong>Game:</strong> {tournament.game}</p>
            <p><strong>Date:</strong> {tournament.date}</p>
            <p><strong>Type:</strong> {tournament.type}</p>
            <p ><strong>Rules:</strong> {tournament.rules}</p>
            <Button variant="contained"><Link to={'/join'}>Join</Link></Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentList;
