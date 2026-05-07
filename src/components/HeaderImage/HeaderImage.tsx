import titleArt from '../../assets/twist_of_fate_ascii.txt?raw';
import './HeaderImage.css';

const HeaderImage = () => {
  return (
    <div className="headerContainer">
      <pre className="headerImage pa4" aria-label="ascii title">
        {titleArt}
      </pre>
    </div>
  );
};

export default HeaderImage;
