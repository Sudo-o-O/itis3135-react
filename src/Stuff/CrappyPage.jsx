export default function CrappyPage() {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginLeft: "3px",
        marginTop: "90px",
        marginRight: "0px",
        marginBottom: "17px",
      }}
    >
      <h2
        style={{
          color: "black",
          fontFamily: "Papyrus",
          marginLeft: "19px",
        }}
      >
        Welcome to the MOST PROFESSIONAL WEBSITE EVER
      </h2>

      <h1
        style={{
          color: "black",
          fontFamily: '"Comic Sans MS"',
          marginLeft: "200px",
        }}
      >
        This is the REAL Title (but it's second)
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: '"Comic Sans MS"',
          marginLeft: "7px",
          marginRight: "190px",
        }}
      >
        THIS PARAGRAPH IS CENTERED EVEN THOUGH IT SHOULD NEVER BE CENTERED.
      </p>

      <p
        style={{
          color: "black",
          fontSize: "52px",
          marginLeft: "2px",
        }}
      >
        THIS TEXT IS WAY TOO BIG FOR NO REASON AT ALL.
      </p>

      <p
        style={{
          color: "black",
          backgroundColor: "yellow",
          marginLeft: "111px",
          marginRight: "4px",
        }}
      >
        <span style={{ textDecoration: "underline" }}>
          This is underlined but it is NOT a link
        </span>{" "}
        and that is a CRIME.
      </p>

      <p
        style={{
          color: "#bbbbbb",
          backgroundColor: "white",
          marginLeft: "33px",
        }}
      >
        This is intentionally low contrast gray on white so it's hard to read.
      </p>

      <img
        src="https://theeburgerdude.com/wp-content/uploads/2021/01/Big-Mac-1024x1024"
        width="600"
        height="150"
        alt="THIS ALT TEXT IS ABSURDLY LONG AND HORRIBLE AND SHOULD GO ON FOREVER AND EVER AND EVER AND EVER AND EVER AND IT DOES NOT DESCRIBE THE IMAGE AT ALL IT JUST EXISTS TO BE TERRIBLE AND ANNOYING AND MAKE THE PAGE WORSE AND WORSE AND WORSE AND WORSE AND WORSE"
        style={{
          borderTop: "30px dotted red",
          borderRight: "30px dashed blue",
          borderBottom: "30px double green",
          borderLeft: "30px groove purple",
          marginLeft: "17px",
        }}
      />

      <h3
        style={{
          color: "black",
          fontFamily: "serif",
          marginLeft: "250px",
        }}
      >
        I LOVE LASAGNA AND TAX FORMS (caption that has nothing to do with the
        image)
      </h3>

      <br />
      <br />
      <br />
      <br />

      <ul
        style={{
          textAlign: "center",
          color: "black",
          marginLeft: "400px",
          marginRight: "400px",
        }}
      >
        <li style={{ fontFamily: "Papyrus" }}>Centered bullet point #1</li>
        <li style={{ fontFamily: '"Comic Sans MS"' }}>
          Centered bullet point #2
        </li>
        <li style={{ fontFamily: "serif" }}>Centered bullet point #3</li>
      </ul>

      <p
        style={{
          color: "black",
          marginLeft: "5px",
          marginRight: "222px",
        }}
      >
        <a href="#/">Go back (default link colors on purpose)</a>
      </p>

      <p
        style={{
          color: "black",
          marginLeft: "333px",
        }}
      >
        <a href="#/introduction">Another l </a>
      </p>
    </div>
  );
}
