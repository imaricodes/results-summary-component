import Results from "./components/Results";
import ResultsSummary from "./components/ResultsSummary";
import ContinueButton from "./components/ContinueButton";

function App() {
  return (

      <div className=" h-screen flex justify-center items-center px-4 min-w-[300px]">
        <div className="container bg-white w-full  rounded-lg">
          <Results />
          <ResultsSummary />
          <ContinueButton />
        </div>
      </div>

  );
}

export default App;
