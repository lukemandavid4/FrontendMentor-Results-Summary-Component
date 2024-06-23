import Reaction from "./assets/icon-reaction.svg";
import Memory from "./assets/icon-memory.svg";
import Verbal from "./assets/icon-verbal.svg";
import Visual from "./assets/icon-visual.svg";
const App = () => {
  return (
    <>
      <div>
        <div>
          <h6>Your Result</h6>
          <div>
            <span>76</span>
            <span>of 100</span>
          </div>
          <h6>Great</h6>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div>
          <h6>Summary</h6>
          <div>
            <div>
              <img src={Reaction} alt="Reaction" />
              <span>Reaction</span>
            </div>
            <div>
              <span>80</span>
              <span>/ 100</span>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <span>80</span>
              <span>/ 100</span>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <span>80</span>
              <span>/ 100</span>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <span>80</span>
              <span>/ 100</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
