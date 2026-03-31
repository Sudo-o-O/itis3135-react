import nightBuilderImg from "./Images/night_builder.png";
import patchArtistImg from "./Images/patch_artist.png";
import rougeDesignerImg from "./Images/rouge_designer.png";

export default function Cards() {
  return (
    <>
      <main id="playing-cards">
        <h2>Glorious Misfits Card Gallery</h2>

        <p>
          These are collectible “Glorious Misfits” cards inspired by trading
          card games. Each one represents a different kind of creative chaos.
        </p>

        <section className="card-layout" aria-label="Glorious Misfits cards">
          {/* Card 1 */}
          <div className="card">
            <div className="left">
              <span className="card-name">Night Builder</span>
              <span className="card-type">Creature — Misfit Engineer</span>
            </div>

            <div className="middle">
              <img
                src={nightBuilderImg}
                alt="Fantasy trading card art for Night Builder, a cyberpunk raccoon coder working at night."
              />
              <p className="rules">
                Haste. When Night Builder enters, you may draw a card, then
                discard a card.
              </p>
            </div>

            <div className="right">
              <span className="mana">⚡ 1U</span>
              <span className="pt">2/1</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="left">
              <span className="card-name">Patch Artist</span>
              <span className="card-type">Creature — Misfit Guardian</span>
            </div>

            <div className="middle">
              <img
                src={patchArtistImg}
                alt="Fantasy trading card art for Patch Artist, a raccoon engineer repairing and stitching digital systems."
              />
              <p className="rules">
                Vigilance. Other Misfits you control get +0/+1.
              </p>
            </div>

            <div className="right">
              <span className="mana">🛡️ 2W</span>
              <span className="pt">2/3</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="left">
              <span className="card-name">Rouge Designer</span>
              <span className="card-type">Creature — Misfit Artist</span>
            </div>

            <div className="middle">
              <img
                src={rougeDesignerImg}
                alt="Fantasy trading card art for Rouge Design, a raccoon artist disrupting boring branding with bold color."
              />
              <p className="rules">
                Disrupt boring branding with a coat of misfit colors.
              </p>
            </div>

            <div className="right">
              <span className="mana">🎨 1G</span>
              <span className="pt">2/2</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
