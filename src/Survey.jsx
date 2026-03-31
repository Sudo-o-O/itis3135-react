export default function Survey() {
  return (
    <>
      <h2>Glorious Misfit Guild Intake Form</h2>

      <p>
        Welcome to the Glorious Misfit Guild. Use this form to join the crew or
        request help with a project. We specialize in clean layouts, accessible
        design, and fixing strange bugs without judgment.
      </p>

      <form id="survey-form" action="#" method="post">
        <fieldset>
          <legend>Basic Information</legend>

          <label id="name-label" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label id="email-label" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label id="number-label" htmlFor="number">
            How many projects have you shipped?
          </label>
          <input
            id="number"
            name="projects"
            type="number"
            min="0"
            max="999"
            placeholder="0"
          />
        </fieldset>

        <fieldset>
          <legend>Request Details</legend>

          <label htmlFor="dropdown">What do you need help with?</label>
          <select id="dropdown" name="request">
            <option value="">Select one</option>
            <option value="ui">UI / Layout cleanup</option>
            <option value="css">CSS Styling &amp; Theme</option>
            <option value="a11y">Accessibility / WCAG fixes</option>
            <option value="debug">Debugging + Validation</option>
          </select>

          <p>Pick your role (if joining):</p>

          <label>
            <input type="radio" name="role" value="builder" />
            Builder
          </label>

          <label>
            <input type="radio" name="role" value="designer" />
            Designer
          </label>

          <label>
            <input type="radio" name="role" value="tester" />
            Tester
          </label>
        </fieldset>

        <fieldset>
          <legend>Misfit Preferences</legend>

          <p>Check anything that fits you:</p>

          <label>
            <input type="checkbox" name="traits" value="night-owl" />
            Night owl
          </label>

          <label>
            <input type="checkbox" name="traits" value="detail" />
            Detail obsessed
          </label>

          <label>
            <input type="checkbox" name="traits" value="chaos" />
            Organized chaos
          </label>

          <label htmlFor="comments">Describe your project or issue:</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            placeholder="What are you building? What's broken?"
          />
        </fieldset>

        <button id="submit" type="submit">
          Submit to the Guild
        </button>
      </form>
    </>
  );
}
