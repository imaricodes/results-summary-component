import { resultsData } from "../data/data";

const ResultsSummary = () => {
  return (
    <div className="summary-container">
      <h3 className="mb-4 font-bold">Summary</h3>
      {resultsData.map((result, index) => {
        let textColor = result.fontColor;
        return (
          <div key={index} className={`summary-item ${result.bgColor} `}>
            <div className={`summary-item__label ${textColor}`}>
              <img src={result.icon} alt="result icon" />
              {result.category}
            </div>
            <div className="summary-item__score flex flex-row gap-1">
                <span className="font-bold">{result.score}</span>
                <span>/</span>
                <span>100</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsSummary;
