import "../src/Card.css";
export const Card = () => {
  return (
    <div className="main">
      <div className="image">
        <img src="/MyPicture.jpg"></img>
      </div>
      <div className="content">
        <div>
          <h1 className="name">Guhan T</h1>
          <h3 className="title">MERN Stack Developer</h3>
        </div>
        <div>
          <p style={{}}>
            Hii! I am a begineer MERN stack developer whose hobbies are coding
            and playing video games. Nice to meet yaa!!!
          </p>
        </div>
      </div>
    </div>
  );
};
