const ParticipantForm = () =>{
    return (
    <div className="container">
        <form style={{border:"2px solid black",borderRadius:"5px",width:"fit-content",margin:"auto"}}>
            <label for="name">Name of participant:</label>
            <input type="text" required/><br />
            <label for="phone">Phone:</label>
            <input type="tel" required/><br />
            <label for="Tournament Name">Enter the name of tournament you want to join</label>
            <input type="text" required/><br />
            
            <label>Team Name:</label>
            <input type="text" required/><br />
            <label>Team Leader:</label>
            <input type="text" required/><br />
            <label>Team Member1:</label>
            <input type="text" required/><br />
            <label>Team Member2:</label>
            <input type="text" required/><br />
            <label>Team Member3:</label>
            <input type="text" required/><br />
            <input type="submit" value="Submit"/>
            
        </form>
    </div>
    )
}

export default ParticipantForm