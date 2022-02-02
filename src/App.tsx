import { useEffect, useState } from "react";
import data from "../data.json";
import Term from "./Term";
import "./App.css";

const ALL = Array.from(data);
const someIncludes = (strs: readonly string[], str: string) => strs.some(s => s.includes(str));

function App() {
  const [enableEn, setEnableEn] = useState(someIncludes(navigator.languages, 'en'));
  const [enableRu, setEnableRu] = useState(someIncludes(navigator.languages, 'ru'));
  const [enableJa, setEnableJa] = useState(someIncludes(navigator.languages, 'ja'));
  const [enableZnCH, setEnableZnCH] = useState(someIncludes(navigator.languages, 'zh'));
  const [enableKo, setEnableKo] = useState(someIncludes(navigator.languages, 'ko'));

  const [enableCondolence, setEnableCondolence] = useState(true);
  const [enableDialog, setEnableDialog] = useState(true);
  const [enableObservation, setEnableObservation] = useState(true);
  const [enableEtc, setEnableEtc] = useState(false);

  const [targets, setTargets] = useState(ALL);

  useEffect(() => {
    const targets = ALL.filter((term) => {
      const isCondolence = term.Term.startsWith("CONDOLENCE_");
      const isDialog = term.Term.startsWith("DIALOG_");
      const isObservation = term.Term.startsWith("OBSERVATION_");

      return (
        (!isCondolence || enableCondolence) &&
        (!isDialog || enableDialog) &&
        (!isObservation || enableObservation) &&
        (isCondolence || isDialog || isObservation || enableEtc)
      );
    });
    setTargets(targets);
  }, [enableCondolence, enableDialog, enableObservation, enableEtc]);

  return (
    <div className="App">
      <header>
        <h1>Getting Over It Subtitles</h1>
        <span className="App-JsonLink">
          <a
            href="https://raw.githubusercontent.com/naari3/goi-subtitles/main/data.json"
            target={"_blank"}
          >
            raw json here
          </a>
        </span>
        <div>
          <div>
            lang:
            <div className="App-CheckBox">
              <label htmlFor="en">
                <input
                  type="checkbox"
                  id="en"
                  checked={enableEn}
                  onChange={(e) => setEnableEn(e.currentTarget.checked)}
                />{" "}
                en
              </label>
            </div>
            <div className="App-CheckBox">
              <label htmlFor="ru">
                <input
                  type="checkbox"
                  id="ru"
                  checked={enableRu}
                  onChange={(e) => setEnableRu(e.currentTarget.checked)}
                />{" "}
                ru
              </label>
            </div>
            <div className="App-CheckBox">
              <label htmlFor="ja">
                <input
                  type="checkbox"
                  id="ja"
                  checked={enableJa}
                  onChange={(e) => setEnableJa(e.currentTarget.checked)}
                />{" "}
                ja
              </label>
            </div>
            <div className="App-CheckBox">
              <label htmlFor="zn-CH">
                <input
                  type="checkbox"
                  id="zn-CH"
                  checked={enableZnCH}
                  onChange={(e) => setEnableZnCH(e.currentTarget.checked)}
                />{" "}
                zn-CH
              </label>
            </div>
            <div className="App-CheckBox">
              <label htmlFor="ko">
                <input
                  type="checkbox"
                  id="ko"
                  checked={enableKo}
                  onChange={(e) => setEnableKo(e.currentTarget.checked)}
                />{" "}
                ko
              </label>
            </div>
          </div>
          <div>
            shows:
            <div className="App-CheckBox">
              <label htmlFor="condolence">
                <input
                  type="checkbox"
                  id="condolence"
                  checked={enableCondolence}
                  onChange={(e) => setEnableCondolence(e.currentTarget.checked)}
                />{" "}
                Condolences
              </label>
            </div>
            <div className="App-CheckBox">
              <label htmlFor="dialog">
                <input
                  type="checkbox"
                  id="dialog"
                  checked={enableDialog}
                  onChange={(e) => setEnableDialog(e.currentTarget.checked)}
                />{" "}
                Dialogs
              </label>
            </div>
            <div className="App-CheckBox">
              <label htmlFor="observation">
                <input
                  type="checkbox"
                  id="observation"
                  checked={enableObservation}
                  onChange={(e) =>
                    setEnableObservation(e.currentTarget.checked)
                  }
                />{" "}
                Observations
              </label>
            </div>
            <div className="App-CheckBox">
              <label htmlFor="etc">
                <input
                  type="checkbox"
                  id="etc"
                  checked={enableEtc}
                  onChange={(e) => setEnableEtc(e.currentTarget.checked)}
                />{" "}
                etc
              </label>
            </div>
          </div>
        </div>
      </header>
      <main>
        {targets.map((term) => (
          <Term
            key={term.Term}
            term={term}
            enableEn={enableEn}
            enableRu={enableRu}
            enableJa={enableJa}
            enableZnCH={enableZnCH}
            enableKo={enableKo}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
