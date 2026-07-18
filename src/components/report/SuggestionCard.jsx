import "../../styles/Report.css";

function SuggestionCard({

  strengths = [

    "Clear communication skills",

    "Good technical understanding",

    "Confident introduction",

  ],

  weaknesses = [

    "Give more real-world examples",

    "Improve confidence while answering",

    "Reduce filler words",

  ],

  suggestions = [

    "Practice mock interviews regularly",

    "Maintain eye contact while speaking",

    "Structure answers using the STAR method",

  ],

}) {

  return (

    <>

      <div className="report-section">

        <h3>

          💪 Strengths

        </h3>

        <ul>

          {strengths.map((item, index) => (

            <li key={index}>

              ✅ {item}

            </li>

          ))}

        </ul>

      </div>

      <div className="report-section warning">

        <h3>

          ⚠ Areas to Improve

        </h3>

        <ul>

          {weaknesses.map((item, index) => (

            <li key={index}>

              {item}

            </li>

          ))}

        </ul>

      </div>

      <div className="report-section tips">

        <h3>

          💡 AI Suggestions

        </h3>

        <ul>

          {suggestions.map((item, index) => (

            <li key={index}>

              {item}

            </li>

          ))}

        </ul>

      </div>

    </>

  );

}

export default SuggestionCard;