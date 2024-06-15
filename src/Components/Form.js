const Form = () => {
    return(
        <div style={{border:"2px solid black",borderRadius:"5px",width:"fit-content",margin:"auto"}}>
            <label for="Name">Name of tournment:</label>
            <input type="text" required></input><br/>
            <label>Name of Organiser: </label>
            <input type="text"required></input><br/>
            <label>Game for the tournament:</label>
            <input type="text"required></input><br/>
            <label>Date of Tournament:</label>
            <input type="date"required></input><br/>
            <label>Tournment type:</label>
            <select>
                <option value="Round robin">Round robin</option>
                <option value="Knockout">Knockout</option>
            </select><br/>
            <label>Rules:</label> 
            <textarea placeholder="eg: Single entry per participant"></textarea>
        </div>
    )
}

export default Form