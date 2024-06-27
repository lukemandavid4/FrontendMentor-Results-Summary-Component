import Reaction from "./assets/icon-reaction.svg";
import Memory from "./assets/icon-memory.svg";
import Verbal from "./assets/icon-verbal.svg";
import Visual from "./assets/icon-visual.svg";

const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-[15.5rem] md:w-[30rem] rounded-2xl shadow-md">
        <div className="bg-[linear-gradient(#7857ff,_#2e2be9)] flex flex-col items-center p-[1.5rem] md:w-[50%] gap-[1rem] rounded-2xl">
          <h6 className="text-center text-lightLavender font-semibold">
            Your Result
          </h6>
          <div className="size-[7rem] bg-[linear-gradient(#2421ca,_#4e21ca)] rounded-[50%] flex flex-col items-center justify-center">
            <span className="text-[3rem] text-primaryWhite font-bold leading-[3rem]">
              76
            </span>
            <span className="text-lightLavender text-[0.9rem]">of 100</span>
          </div>
          <h6 className="text-primaryWhite font-bold text-[1.1rem]">Great</h6>
          <p className="text-lightLavender text-center text-[0.875rem]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="md:w-[50%] flex flex-col items-center gap-[0.5rem] p-[1.5rem]">
          <h6 className="text-grayBlue font-bold self-start">Summary</h6>
          <div className="flex justify-between w-[100%]  bg-[hsla(0,_100%,_67%,_0.1)] p-[0.5rem] items-center rounded-lg">
            <div className="flex gap-[0.3rem]">
              <img src={Reaction} alt="Reaction" className="w-[1.1rem]" />
              <span className="text-lightRed font-bold text-[0.9rem]">
                Reaction
              </span>
            </div>
            <div className="text-[0.9rem]">
              <span className="text-grayBlue font-bold">80</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <div className="flex justify-between w-[100%] bg-[hsla(39,_100%,_56%,_0.1)] p-[0.5rem] items-center rounded-lg">
            <div className="flex gap-[0.3rem]">
              <img src={Memory} alt="Memory" className="w-[1.1rem]" />
              <span className="text-orangeYellow font-bold text-[0.9rem]">
                Memory
              </span>
            </div>
            <div className="text-[0.9rem]">
              <span className="text-grayBlue font-bold">92</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <div className="flex justify-between w-[100%] bg-[hsla(166,_100%,_37%,_0.1)] p-[0.5rem] items-center rounded-lg">
            <div className="flex gap-[0.3rem]">
              <img src={Verbal} alt="Verbal" className="w-[1.1rem]" />
              <span className="text-greenTeal font-bold text-[0.9rem]">
                Verbal
              </span>
            </div>
            <div className="text-[0.9rem]">
              <span className="text-grayBlue font-bold">61</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <div className="flex justify-between w-[100%] bg-[hsla(234,_85%,_45%,_0.1)] p-[0.5rem] items-center rounded-lg">
            <div className="flex gap-[0.3rem]">
              <img src={Visual} alt="Visual" className="w-[1.1rem]" />
              <span className="text-cobaltBlue font-bold text-[0.9rem]">
                Visual
              </span>
            </div>
            <div className="text-[0.9rem]">
              <span className="text-grayBlue font-bold">72</span>
              <span className="text-lightLavender">/ 100</span>
            </div>
          </div>
          <button className="bg-grayBlue text-primaryWhite w-[100%] py-[0.5rem] text-[0.9rem] font-bold rounded-[100vw] mt-[1rem]">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
