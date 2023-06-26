const Results = () => {
  return (
    <div className="pt-1 pb-5 flex flex-col items-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-2xl mb-6 px-4 ">
      <span className="text-light-lavender">
        <span className="inline-block mb-3 text-[.6rem]"><h5>Your Result</h5></span>
      </span>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-violet-blue to-persian-blue text-white rounded-full w-24 h-24 mb-3">
        <span className="text-4xl mb-1">76</span>
        <span className="text-[.5rem] text-light-lavender">of 100</span>
      </div>
      <span className="text-white mb-1 text-sm">
        <p>Great</p>
      </span>
      <span className="text-light-lavender text-[.6rem] max-w-[300px]">
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </span>
      
    </div>
  );
};

export default Results;
