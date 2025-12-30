import "./Portfolio.scss";
import norsman from "../../assets/norsman.png";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        {/* <li>Design</li>
        <li>Branding</li> */}
      </ul>
      <div className="container">
        {
          <div className="item">
            <img src={norsman} alt="" />
          </div>
        }
        {
          <div className="item">
            <img src={norsman} alt="" />
          </div>
        }
        {
          <div className="item">
            <img src={norsman} alt="" />
          </div>
        }
        {
          <div className="item">
            <img src={norsman} alt="" />
          </div>
        }
      </div>
    </div>
  );
}
