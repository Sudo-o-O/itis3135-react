import { useState } from "react";
import "./hobby.css";

import whatImg from "../Images/what-homelab.png";
import whoImg from "../Images/who_builder.png";
import whenImg from "../Images/when_rack.png";
import whereImg from "../Images/where_parts.png";
import howImg from "../Images/how_build.png";
import whyImg from "../Images/why_server.png";
import aiImg from "../Images/ai_concept.png";

export default function Hobby() {
  const [active, setActive] = useState("what");

  const tab = (id, label, showDivider = true) => (
    <>
      <button
        type="button"
        className={active === id ? "active-tab" : ""}
        onClick={() => setActive(id)}
      >
        {label}
      </button>
      {showDivider && <span className="divider">⬢</span>}
    </>
  );

  return (
    <div className="hobby-page">
      <div className="hobby-header">
        <div className="site-wrap">
          <h1>Homelab &amp; Custom PC Building</h1>

          <p className="tagline">
            A hobby site about building powerful computers, experimenting with
            servers, and creating a personal lab for learning, storage,
            networking, and performance.
          </p>

          <nav className="hobby-nav" aria-label="Hobby section navigation">
            {tab("what", "What")}
            {tab("who", "Who")}
            {tab("when", "When")}
            {tab("where", "Where")}
            {tab("how", "How")}
            {tab("why", "Why")}
            {tab("ai", "AI Prompts", false)}
          </nav>
        </div>
      </div>

      <div className="hobby-main">
        <section
          className={`hobby-section ${active === "what" ? "active-section" : ""}`}
        >
          <h2>What: What This Hobby Is</h2>

          <div className="intro-box">
            <p>
              My hobby is building custom PCs and homelab systems. A custom PC
              is a computer assembled from individually selected parts such as
              the processor, graphics card, memory, cooling, and storage. A
              homelab is a personal technology environment used to learn, test,
              and experiment with servers, virtualization, networking, storage,
              and automation.
            </p>
            <p>
              This hobby combines creativity and technical skill. It is part
              engineering project, part design project, and part learning
              platform. Every build can be optimized for a different goal such
              as gaming, video editing, virtualization, media storage, or
              learning enterprise-style infrastructure.
            </p>
          </div>

          <div className="content-box">
            <h3>Main Parts of the Hobby</h3>
            <ul className="tip-list">
              <li>Choosing computer components that work well together</li>
              <li>Assembling and cable-managing the system cleanly</li>
              <li>Installing operating systems, hypervisors, and services</li>
              <li>Testing performance, cooling, storage, and reliability</li>
            </ul>
          </div>

          <figure>
            <img
              src={whatImg}
              alt="A neatly organized custom computer and small homelab setup with monitors and networking equipment"
            />
            <figcaption>Custom PC and Homelab Workspace</figcaption>
          </figure>

          <p className="prompt-note">
            AI image prompt: “photorealistic custom PC desk setup with a small
            home server, networking gear, dual monitors, cool blue lighting,
            clean cable management, modern tech workspace”
          </p>
        </section>

        <section
          className={`hobby-section ${active === "who" ? "active-section" : ""}`}
        >
          <h2>Who: Who Enjoys This Hobby</h2>

          <div className="intro-box">
            <p>
              Many kinds of people enjoy building PCs and homelabs. Students use
              them to practice technical skills outside class. Gamers build
              systems tailored to their favorite games. IT professionals use
              homelabs to explore virtualization, storage, containers, and
              cybersecurity tools. Hobbyists enjoy the process of planning,
              building, tuning, and improving systems over time.
            </p>
          </div>

          <div className="grid-two">
            <div className="content-box">
              <h3>Common People in the Hobby</h3>
              <ul className="tip-list">
                <li>Students learning hardware and networking</li>
                <li>Gamers who want high performance and customization</li>
                <li>Developers testing software and virtual machines</li>
                <li>IT enthusiasts learning server and cloud concepts</li>
              </ul>
            </div>

            <div className="content-box">
              <h3>Why They Like It</h3>
              <p>
                People enjoy this hobby because it gives them control over the
                system they use. It also helps them build practical experience
                that connects directly to real-world computing jobs and personal
                projects.
              </p>
            </div>
          </div>

          <table aria-label="Types of builders and their goals">
            <thead>
              <tr>
                <th>Builder Type</th>
                <th>Main Goal</th>
                <th>Example Project</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Student</td>
                <td>Learn core IT skills</td>
                <td>Linux server with virtual machines</td>
              </tr>
              <tr>
                <td>Gamer</td>
                <td>Get top performance</td>
                <td>High-refresh gaming PC</td>
              </tr>
              <tr>
                <td>IT Enthusiast</td>
                <td>Practice enterprise concepts</td>
                <td>Rack server with storage and containers</td>
              </tr>
            </tbody>
          </table>

          <figure>
            <img
              src={whoImg}
              alt="A person assembling a custom desktop PC with tools and components spread across a desk"
            />
            <figcaption>Builders Learn by Doing</figcaption>
          </figure>

          <p className="prompt-note">
            AI image prompt: “photorealistic person building a custom desktop PC
            at a workbench with motherboard, GPU, tools, and organized parts,
            realistic indoor lighting”
          </p>
        </section>

        <section
          className={`hobby-section ${active === "when" ? "active-section" : ""}`}
        >
          <h2>When: Best Times to Work on the Hobby</h2>

          <div className="intro-box">
            <p>
              This hobby usually happens during evenings, weekends, school
              breaks, or any time someone can focus without rushing. Building a
              PC carefully takes time, especially when installing parts, routing
              cables, updating firmware, and testing system stability. Homelab
              work often happens in phases, with planning first and upgrades
              later.
            </p>
          </div>

          <div className="content-box">
            <h3>Good Times for Different Tasks</h3>
            <ol>
              <li>Weeknights for research, software updates, and planning</li>
              <li>Weekends for assembly, upgrades, and cable management</li>
              <li>Semester breaks for larger rebuilds or rack projects</li>
            </ol>
          </div>

          <table aria-label="Schedule of homelab and PC building activities">
            <thead>
              <tr>
                <th>Time</th>
                <th>Best Activity</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Evening</td>
                <td>Research and software setup</td>
                <td>Lower effort and easier to pause</td>
              </tr>
              <tr>
                <td>Weekend</td>
                <td>Assembly and testing</td>
                <td>More uninterrupted time</td>
              </tr>
              <tr>
                <td>Breaks / Holidays</td>
                <td>Major rebuild or homelab expansion</td>
                <td>Enough time for troubleshooting</td>
              </tr>
            </tbody>
          </table>

          <figure>
            <img
              src={whenImg}
              alt="A glowing server rack in a dark room with switches, cables, and status lights"
            />
            <figcaption>Weekend Upgrade Session</figcaption>
          </figure>

          <p className="prompt-note">
            AI image prompt: “photorealistic home server rack glowing in a dark
            room, organized cables, switches and blinking status lights,
            realistic tech photography”
          </p>
        </section>

        <section
          className={`hobby-section ${active === "where" ? "active-section" : ""}`}
        >
          <h2>Where: Best Places for the Hobby</h2>

          <div className="intro-box">
            <p>
              A custom PC can be built almost anywhere with a stable table, good
              lighting, and enough space to organize parts. Homelabs usually
              work best in offices, spare rooms, basements, or dedicated corners
              where sound, heat, and cables can be managed well. The location
              matters because airflow, power, dust, and noise all affect the
              system.
            </p>
          </div>

          <div className="grid-two">
            <div className="content-box">
              <h3>Good Build Locations</h3>
              <ul className="tip-list">
                <li>Desk or large table with room for parts</li>
                <li>Cool room with good airflow</li>
                <li>Area with reliable power and internet access</li>
              </ul>
            </div>

            <div className="content-box">
              <h3>Things to Avoid</h3>
              <ul className="tip-list">
                <li>Cluttered areas with little workspace</li>
                <li>Hot rooms with poor ventilation</li>
                <li>Dusty spaces or carpet-heavy areas when handling parts</li>
              </ul>
            </div>
          </div>

          <figure>
            <img
              src={whereImg}
              alt="Computer components arranged neatly on a desk including motherboard, memory, graphics card, and cooling parts"
            />
            <figcaption>Organized Parts Make Building Easier</figcaption>
          </figure>

          <p className="prompt-note">
            AI image prompt: “photorealistic computer parts laid out neatly on a
            desk including motherboard, graphics card, RAM, fans, storage
            drives, clean and organized workstation”
          </p>

          <div className="content-box">
            <p>
              For a homelab, a room with shelves or a rack can make the project
              feel much more professional. It also helps separate experimental
              gear from daily-use devices.
            </p>
          </div>
        </section>

        <section
          className={`hobby-section ${active === "how" ? "active-section" : ""}`}
        >
          <h2>How: How to Get Started</h2>

          <div className="intro-box">
            <p>
              The best way to start is with a simple goal. For example, someone
              might want to build a gaming PC, a file server, or a small
              virtualization host. After choosing the goal, the next steps are
              selecting compatible parts, assembling the hardware carefully,
              installing the software, and testing the final system.
            </p>
          </div>

          <table aria-label="Steps to start building a custom PC or homelab">
            <thead>
              <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Choose a goal</td>
                <td>
                  Know whether the system is for gaming, storage, or learning
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Select compatible parts</td>
                <td>Avoid hardware mismatch problems</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Assemble the hardware</td>
                <td>Create a working physical system</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Install software</td>
                <td>Set up the operating system or hypervisor</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Test and improve</td>
                <td>Check temperatures, performance, and stability</td>
              </tr>
            </tbody>
          </table>

          <div className="content-box">
            <h3>Starter Advice</h3>
            <ul className="tip-list">
              <li>
                Start smaller than your dream setup, then grow it over time
              </li>
              <li>Read hardware compatibility before ordering parts</li>
              <li>Label cables and document what each device does</li>
              <li>Keep backups if your homelab stores important files</li>
            </ul>
          </div>

          <figure>
            <img
              src={howImg}
              alt="A custom PC mid-assembly with cables, cooling, tools, and an open case on a desk"
            />
            <figcaption>Building Step by Step</figcaption>
          </figure>

          <p className="prompt-note">
            AI image prompt: “photorealistic custom computer being assembled in
            an open case, visible cables, tools, fans, and cooling components,
            realistic detailed tech scene”
          </p>
        </section>

        <section
          className={`hobby-section ${active === "why" ? "active-section" : ""}`}
        >
          <h2>Why: Why I Enjoy This Hobby</h2>

          <div className="intro-box">
            <p>
              I like this hobby because it mixes problem solving, creativity,
              and real technical skill. Every project has design choices,
              performance tradeoffs, and practical goals. It is rewarding to
              start with separate parts and end with a working system that is
              useful, powerful, and personalized.
            </p>
            <p>
              This hobby also connects strongly to my academic and professional
              interests. It builds experience with hardware, virtualization,
              networking, storage, and systems thinking. In other words, it is
              fun, but it also teaches useful skills that matter outside the
              hobby itself.
            </p>
          </div>

          <div className="content-box">
            <h3>Reasons This Hobby Matters to Me</h3>
            <ul className="tip-list">
              <li>It helps me understand how computing systems really work</li>
              <li>It supports learning related to IT and infrastructure</li>
              <li>It allows me to create systems built for my own needs</li>
              <li>
                It is satisfying to improve and upgrade projects over time
              </li>
            </ul>
          </div>

          <figure>
            <img
              src={whyImg}
              alt="A polished futuristic homelab setup with glowing server lights and a custom PC in the same room"
            />
            <figcaption>
              Learning Through Building and Experimentation
            </figcaption>
          </figure>

          <p className="prompt-note">
            AI image prompt: “photorealistic futuristic homelab room with custom
            PC, glowing server rack, modern lighting, clean layout, realistic
            detailed technology environment”
          </p>
        </section>

        <section
          className={`hobby-section ${active === "ai" ? "active-section" : ""}`}
        >
          <h2>AI Prompts: How AI Was Used</h2>

          <div className="content-box">
            <p>
              <strong>AI model used:</strong> ChatGPT
            </p>
            <p>
              <strong>Purpose:</strong> brainstorming hobby page structure,
              helping write section content, and organizing and creating image
              prompts.
            </p>
          </div>

          <div className="content-box">
            <h3>Main Prompts Used</h3>
            <ol>
              <li>
                “Help me plan a single-page hobby site about homelabs and custom
                PC building. I want to include sections for what, who, when,
                where, how, and why, plus a section about how I used AI to
                create the site.”
              </li>
              <li>
                “What should I put in for the text content for these sections?”
              </li>
              <li>
                “Check if I am missing any important information for the rubric
                sections and suggest improvements.”
              </li>
              <li>
                “Generate photorealistic image concepts for each section of my
                hobby site about homelabs and custom PC building.”
              </li>
            </ol>
          </div>

          <figure>
            <img
              src={aiImg}
              alt="Stylized concept art of a homelab and custom PC design planning board"
            />
            <figcaption>AI-Assisted Planning for the Hobby Site</figcaption>
          </figure>

          <p className="prompt-note">
            AI image prompt: “clean concept art style planning board showing a
            custom PC build, homelab rack, sketches, diagrams, and a polished
            modern tech design theme”
          </p>
        </section>
      </div>
    </div>
  );
}
