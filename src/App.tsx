import Reaction from "./assets/icon-reaction.svg";
import Memory from "./assets/icon-memory.svg";
import Verbal from "./assets/icon-verbal.svg";
import Visual from "./assets/icon-visual.svg";

const App = () => {
  return (
    <>
      <div className="flex w-[30rem] rounded-xl overflow-hidden">
        <div className="bg-[linear-gradient(slateBlue,_royalBlue)] flex flex-col items-center p-[1rem] w-[50%]">
          <h6 className="text-center text-lightLavender font-semibold">
            Your Result
          </h6>
          <div className="size-[6rem] bg-[linear-gradient(persianBlue,_violetBlue)] rounded-[50% flex flex-col items-center justify-center">
            <span className="text-[2rem] text-primaryWhite font-bold">76</span>
            <span className="text-lightLavender">of 100</span>
          </div>
          <h6 className="text-primaryWhite">Great</h6>
          <p className="text-lightLavender text-center">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="w-[50%] flex flex-col items-center gap-[0.5rem] p-[1rem]">
          <h6 className="text-grayBlue font-bold">Summary</h6>
          <div className="flex justify-between w-[100%]  bg-[hsla(0,_100%,_67%,_0.1)]">
            <div className="flex">
              <img src={Reaction} alt="Reaction" />
              <span className="text-lightRed font-bold">Reaction</span>
            </div>
            <div>
              <span className="text-grayBlue font-bold">80</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <div className="flex justify-between w-[100%] bg-[hsla(39,_100%,_56%,_0.1)]">
            <div className="flex">
              <img src={Memory} alt="Memory" />
              <span className="text-orangeYellow font-bold">Memory</span>
            </div>
            <div>
              <span className="text-grayBlue font-bold">80</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <div className="flex justify-between w-[100%] bg-[hsla(166,_100%,_37%,_0.1)]">
            <div className="flex">
              <img src={Verbal} alt="Verbal" />
              <span className="text-greenTeal font-bold">Verbal</span>
            </div>
            <div>
              <span className="text-grayBlue font-bold">80</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <div className="flex justify-between w-[100%] bg-[hsla(234,_85%,_45%,_0.1)]">
            <div className="flex">
              <img src={Visual} alt="Visual" />
              <span className="text-cobaltBlue font-bold">Visual</span>
            </div>
            <div>
              <span className="text-grayBlue font-bold">80</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </>
  );
};

export default App;
