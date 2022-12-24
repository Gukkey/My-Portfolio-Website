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
          <p>
            Hii! I am a begineer MERN stack developer who is interested in
            taking both internships and full time employment offers too. My
            primary (and favorite) language is Java, I am currently learning
            JavaScript and MERN stack. I am open for taking easy and small
            comissions too.
          </p>
        </div>
      </div>
    </div>
  );
};
