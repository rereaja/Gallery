import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");

  const handleClick = () => {
    if (name && movie) {
      alert("OMG URE CUTEE HAVE A CUPCAKE ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა🧁🍭!");
    } else {
      alert("Oh no, you haven't entered it yet!");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="title">Hello!</div>
        <form>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Whats ur name?</label>
          </div>
          <h2></h2>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="movie"
              placeholder="Fav Movie"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
            <label htmlFor="vibe">Whats ur fav movie?</label>
          </div>
          <div className="pencet"> 
            <button type="button" onClick={handleClick}>Click this!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
