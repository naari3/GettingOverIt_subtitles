import "./Term.css";

type TermType = {
  Term: string;
  TermType: number;
  Description: string;
  Languages: Languages;
};

interface Languages {
  en: string;
  ru: string;
  ja: string;
  "zn-CH": string;
  ko: string;
}

type Props = {
  term: TermType;
  enableEn: boolean;
  enableRu: boolean;
  enableJa: boolean;
  enableZnCH: boolean;
  enableKo: boolean;
};

function Term({
  term,
  enableEn,
  enableRu,
  enableJa,
  enableZnCH,
  enableKo,
}: Props) {
  return (
    <div id={`term-${term.Term}`} className="Term">
      <h2>
        <a href={`#term-${term.Term}`}>{term.Term}</a>
      </h2>
      <div className="Term-en">
        {enableEn ? (
          <>
            <p className="Term-sentence">{term.Languages.en}</p>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="Term-ru">
        {enableRu ? (
          <>
            <p className="Term-sentence">{term.Languages.ru}</p>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="Term-ja">
        {enableJa ? (
          <>
            <p className="Term-sentence">{term.Languages.ja}</p>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="Term-zn-CH">
        {enableZnCH ? (
          <>
            <p className="Term-sentence">{term.Languages["zn-CH"]}</p>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="Term-ko">
        {enableKo ? (
          <>
            <p className="Term-sentence">{term.Languages.ko}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Term;
