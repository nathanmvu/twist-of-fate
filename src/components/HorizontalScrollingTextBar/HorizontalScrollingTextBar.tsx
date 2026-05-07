import './HorizontalScrollingTextBar.css';

const scrollingText = 'a twist of fate has brought you here, where will u go next?';
const repetitions = 10;

const HorizontalScrollingTextBar = () => {
  return (
    <div className="horizontal-scrolling-text-bar">
      <div className="text-container">
        {Array.from({ length: repetitions }, (_, index) => (
          <span key={`${scrollingText}-${index}`}>
            <span className="scrolling-text code f5 lh-copy">{scrollingText}</span>
            <span className="separator" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollingTextBar;
