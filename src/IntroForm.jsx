import { useState } from "react";
import profileImg from "./Images/profile-landscape.jpeg";

export default function IntroForm() {
  const [imagePreview, setImagePreview] = useState(profileImg);
  const [imageCaption, setImageCaption] = useState("Photo of Matthew R. Gibbs");

  const [courses, setCourses] = useState([
    {
      department: "ITSC",
      number: "3146",
      name: "Introduction to Operating Systems and Networking",
      reason:
        "Required course focusing on operating system fundamentals and networking concepts.",
    },
    {
      department: "ITSC",
      number: "3160",
      name: "Database Design and Implementation",
      reason:
        "Required course covering data modeling and relational databases.",
    },
    {
      department: "ITIS",
      number: "3135",
      name: "Front-End Web Application Development",
      reason:
        "Required course emphasizing modern frontend development and user experience.",
    },
    {
      department: "JAPN",
      number: "3201",
      name: "Upper Intermediate Japanese",
      reason:
        "Major requirement focused on advanced reading, writing, and professional communication.",
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "Matthew",
    middleName: "R.",
    nickname: "",
    lastName: "Gibbs",
    mascotAdjective: "Glorious",
    mascotAnimal: "Misfit",
    divider: "|",
    acknowledgment:
      "I understand that what I put here is publicly available on the web and I won’t put anything here I don’t want the public to see. — MRG",
    ackDate: "1/13/2026",
    personalStatement:
      "I’m a senior at UNC Charlotte pursuing a double major in Computer Science with a concentration in Information Technology and Japanese. I enjoy working across both frontend and backend development, building web applications, and gaining hands-on experience with virtual machines, networking, and server infrastructure to better understand how systems and data operate in real-world environments.",
    personalBackground:
      "Outside of academics, I enjoy watching anime, reading, and working on hands-on projects such as 3D printing and experimenting with emulation software.",
    academicBackground:
      "I am currently a senior at UNC Charlotte completing a double major in Computer Science (IT concentration) and Japanese.",
    professionalBackground:
      "I currently work in customer service within the insurance industry, where I regularly communicate with clients and translate complex policy or system-related information into clear, understandable terms.",
    careerGoals:
      "After completing my undergraduate degrees, I plan to pursue an MS in Management. My goal is to combine a solid technical foundation in Computer Science with leadership and management skills so I can work as a technical liaison between engineering teams, IT staff, and non-technical stakeholders.",
    subjectBackground:
      "I was first introduced to web development in high school while helping build and maintain a website for my school’s robotics team.",
    primaryComputer: "16-inch MacBook Pro (M4) with two external monitors.",
    backupComputer: "Mini PC available as a backup system.",
    funnyThing: "My heart has stopped four times over the course of my life.",
    share: "I’m one-quarter Native American.",
    quote: "Fall seven times, stand up eight.",
    quoteAuthor: "Japanese Proverb",
    githubPages: "https://sudo-o-o.github.io/",
    github: "https://github.com/Sudo-o-O",
    charlotteWeb: "https://webpages.charlotte.edu/mgibbs13",
    freeCodeCamp: "https://www.freecodecamp.org/Glorious-Misfit",
    linkedin: "https://www.linkedin.com/in/gibbsrmatthew/",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) {
      setImagePreview(profileImg);
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    if (!imageCaption.trim()) {
      setImageCaption(file.name);
    }
  }

  function handleCourseChange(index, field, value) {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  }

  function addCourse() {
    setCourses((prev) => [
      ...prev,
      {
        department: "",
        number: "",
        name: "",
        reason: "",
      },
    ]);
  }

  function deleteCourse(index) {
    setCourses((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Intro form submitted:", {
      ...formData,
      imageCaption,
      courses,
    });
  }

  function handleClear() {
    setFormData({
      firstName: "",
      middleName: "",
      nickname: "",
      lastName: "",
      mascotAdjective: "",
      mascotAnimal: "",
      divider: "",
      acknowledgment: "",
      ackDate: "",
      personalStatement: "",
      personalBackground: "",
      academicBackground: "",
      professionalBackground: "",
      careerGoals: "",
      subjectBackground: "",
      primaryComputer: "",
      backupComputer: "",
      funnyThing: "",
      share: "",
      quote: "",
      quoteAuthor: "",
      githubPages: "",
      github: "",
      charlotteWeb: "",
      freeCodeCamp: "",
      linkedin: "",
    });
    setImageCaption("");
    setImagePreview(profileImg);
    setCourses([]);
  }

  function handleJSON() {
    const output = {
      ...formData,
      imageCaption,
      courses,
    };
    console.log(JSON.stringify(output, null, 2));
    alert("JSON generated in console.");
  }

  function handleHTML() {
    alert("HTML generation not wired yet in React.");
  }

  return (
    <>
      <h2>Introduction Form</h2>
      <h3>Please submit the form below.</h3>

      <form id="form" onSubmit={handleSubmit}>
        <section className="compact-layout three-col">
          <h3>Name and Mascot</h3>

          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              placeholder="Enter first name"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="middleName">Middle Name / Initial</label>
            <input
              id="middleName"
              name="middleName"
              type="text"
              value={formData.middleName}
              placeholder="Enter middle name or initial"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="nickname">Nickname / Preferred Name</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={formData.nickname}
              placeholder="Enter nickname or preferred name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              placeholder="Enter last name"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mascotAdjective">Mascot Adjective</label>
            <input
              id="mascotAdjective"
              name="mascotAdjective"
              type="text"
              value={formData.mascotAdjective}
              placeholder="Enter mascot adjective"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mascotAnimal">Mascot Animal</label>
            <input
              id="mascotAnimal"
              name="mascotAnimal"
              type="text"
              value={formData.mascotAnimal}
              placeholder="Enter mascot animal"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="divider">Divider</label>
            <input
              id="divider"
              name="divider"
              type="text"
              value={formData.divider}
              placeholder="Example: | or ~ or ★"
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className="compact-layout two-col">
          <h3>Acknowledgment</h3>

          <div className="span-2">
            <label htmlFor="acknowledgment">Acknowledgment Statement</label>
            <textarea
              id="acknowledgment"
              name="acknowledgment"
              placeholder="Enter acknowledgment statement"
              value={formData.acknowledgment}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="ackDate">Acknowledgment Date</label>
            <input
              id="ackDate"
              name="ackDate"
              type="text"
              value={formData.ackDate}
              placeholder="Enter date"
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section>
          <h3>Picture</h3>

          <div className="file-row">
            <label htmlFor="image">Upload a Picture</label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <figure className="compact-figure">
            <img
              id="imagePreview"
              src={imagePreview}
              alt="Photo of Matthew R. Gibbs"
              width="250"
            />
            <figcaption>
              <em id="previewCaption">
                {imageCaption || "Photo of Matthew R. Gibbs"}
              </em>
            </figcaption>
          </figure>

          <div className="compact-width">
            <label htmlFor="imageCaption">Picture Caption</label>
            <input
              id="imageCaption"
              name="imageCaption"
              type="text"
              value={imageCaption}
              placeholder="Enter picture caption"
              onChange={(e) => setImageCaption(e.target.value)}
              required
            />
          </div>
        </section>

        <section className="compact-layout two-col">
          <h3>Introduction Content</h3>

          <div>
            <label htmlFor="personalStatement">Personal Statement</label>
            <textarea
              id="personalStatement"
              name="personalStatement"
              placeholder="Enter your personal statement"
              value={formData.personalStatement}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="personalBackground">Personal Background</label>
            <textarea
              id="personalBackground"
              name="personalBackground"
              placeholder="Enter personal background"
              value={formData.personalBackground}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="academicBackground">Academic Background</label>
            <textarea
              id="academicBackground"
              name="academicBackground"
              placeholder="Enter academic background"
              value={formData.academicBackground}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="professionalBackground">
              Professional Background
            </label>
            <textarea
              id="professionalBackground"
              name="professionalBackground"
              placeholder="Enter professional background"
              value={formData.professionalBackground}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="careerGoals">Academic &amp; Career Goals</label>
            <textarea
              id="careerGoals"
              name="careerGoals"
              placeholder="Enter academic and career goals"
              value={formData.careerGoals}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="subjectBackground">
              Background in This Subject
            </label>
            <textarea
              id="subjectBackground"
              name="subjectBackground"
              placeholder="Enter subject background"
              value={formData.subjectBackground}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="primaryComputer">Primary Work Computer</label>
            <textarea
              id="primaryComputer"
              name="primaryComputer"
              placeholder="Enter primary work computer"
              value={formData.primaryComputer}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="backupComputer">
              Backup Work Computer &amp; Location Plan
            </label>
            <textarea
              id="backupComputer"
              name="backupComputer"
              placeholder="Enter backup work computer"
              value={formData.backupComputer}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="funnyThing">
              Funny / Interesting item to remember me by
            </label>
            <textarea
              id="funnyThing"
              name="funnyThing"
              placeholder="Enter a funny or interesting fact"
              value={formData.funnyThing}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="share">Something I’d also like to share</label>
            <textarea
              id="share"
              name="share"
              placeholder="Enter something you'd like to share"
              value={formData.share}
              onChange={handleChange}
            />
          </div>
        </section>

        <section>
          <h3>Courses I’m Taking &amp; Why</h3>

          <div id="courseList">
            {courses.map((course, index) => (
              <div className="course-entry" key={index}>
                <div>
                  <label>Department</label>
                  <input
                    type="text"
                    value={course.department}
                    placeholder="Department"
                    onChange={(e) =>
                      handleCourseChange(index, "department", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <label>Number</label>
                  <input
                    type="text"
                    value={course.number}
                    placeholder="Course number"
                    onChange={(e) =>
                      handleCourseChange(index, "number", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={course.name}
                    placeholder="Course name"
                    onChange={(e) =>
                      handleCourseChange(index, "name", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <label>Reason</label>
                  <input
                    type="text"
                    value={course.reason}
                    placeholder="Reason for taking the course"
                    onChange={(e) =>
                      handleCourseChange(index, "reason", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="course-delete-wrap">
                  <button type="button" onClick={() => deleteCourse(index)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button type="button" id="addCourseBtn" onClick={addCourse}>
            Add Course
          </button>
        </section>

        <section className="compact-layout two-col">
          <h3>Quote and Links</h3>

          <div>
            <label htmlFor="quote">Quote</label>
            <input
              id="quote"
              name="quote"
              type="text"
              value={formData.quote}
              placeholder="Enter quote"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="quoteAuthor">Quote Author</label>
            <input
              id="quoteAuthor"
              name="quoteAuthor"
              type="text"
              value={formData.quoteAuthor}
              placeholder="Enter quote author"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="githubPages">GitHub.io</label>
            <input
              id="githubPages"
              name="githubPages"
              type="url"
              value={formData.githubPages}
              placeholder="Enter GitHub Pages URL"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="github">GitHub</label>
            <input
              id="github"
              name="github"
              type="url"
              value={formData.github}
              placeholder="Enter GitHub URL"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="charlotteWeb">CLT Web</label>
            <input
              id="charlotteWeb"
              name="charlotteWeb"
              type="url"
              value={formData.charlotteWeb}
              placeholder="Enter Charlotte Web URL"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="freeCodeCamp">freeCodeCamp</label>
            <input
              id="freeCodeCamp"
              name="freeCodeCamp"
              type="url"
              value={formData.freeCodeCamp}
              placeholder="Enter freeCodeCamp URL"
              onChange={handleChange}
              required
            />
          </div>

          <div className="span-2 compact-width">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              value={formData.linkedin}
              placeholder="Enter LinkedIn URL"
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className="form-buttons">
          <h3>Form Actions</h3>

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button type="button" id="clearBtn" onClick={handleClear}>
            Clear
          </button>
          <button type="button" id="jsonBtn" onClick={handleJSON}>
            Generate JSON
          </button>
          <button type="button" id="htmlBtn" onClick={handleHTML}>
            Generate HTML
          </button>
        </section>
      </form>
    </>
  );
}
