import { useLayoutEffect, useState } from "preact/hooks";

const questions = [
  {
    title: "Where will you be seeking care?",
    options: ["In the UK", "Outside the UK"],
  },
  {
    title: "Have you discussed your symptoms with a clinician?",
    options: [
      "Yes, I have a diagnosis",
      "I am still being assessed",
      "I have not discussed them yet",
    ],
  },
  {
    title: "Have you tried treatment for these symptoms?",
    options: [
      "Yes, and I can describe the outcome",
      "Yes, but I need to check the details",
      "I have not tried treatment yet",
    ],
  },
];

const historyAdvice = [
  "Ask the clinic which documents it needs to confirm your diagnosis, such as a GP summary or a specialist letter.",
  "Ask the clinician assessing your symptoms what is known so far and whether further tests or referrals are planned.",
  "Start by discussing the symptoms with your usual clinician so they can consider possible causes and appropriate care.",
];

const treatmentAdvice = [
  "Write down each treatment, when you tried it, what changed and any side effects. Ask the specialist how that history affects your options.",
  "Request your treatment history from your GP surgery or specialist team. Include therapies as well as medicines and note what you remember about their effects.",
  "Ask your usual clinician which established treatments may help and what each involves. A clinic can explain its own assessment criteria before you pay.",
];

export default function EligibilityChecker() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => setReady(true), []);
  const step = answers.length;
  const outsideUK = answers[0] === 1;
  const complete = outsideUK || step === questions.length;
  const buttonClass =
    "w-full rounded-2xl border border-line bg-white px-5 py-4 text-left font-semibold text-ink transition-colors hover:border-leaf hover:bg-leaf-tint";

  return (
    <div className="card mx-auto max-w-2xl p-6 md:p-10">
      <div
        aria-live="polite"
        aria-atomic="true"
        key={complete ? "result" : step}
      >
        {complete ? (
          <>
            <p className="eyebrow">Your next steps</p>
            <h2 className="headline mt-3 text-[30px]">
              {outsideUK
                ? "Check your local guidance"
                : "Prepare for a clinical discussion"}
            </h2>
            {outsideUK ? (
              <p className="mt-4 leading-relaxed text-ink-soft">
                Leafer covers UK clinics. Ask a clinician where you live about
                local services and prescribing rules.
              </p>
            ) : (
              <>
                <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-ink-soft">
                  <li>{historyAdvice[answers[1]]}</li>
                  <li>{treatmentAdvice[answers[2]]}</li>
                  <li>
                    Ask about other options, likely benefits and possible harms.
                    Your clinician can assess what is appropriate for you.
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/guides/talking-to-your-gp"
                    className="btn-primary"
                  >
                    Find your medical records
                  </a>
                  <a href="/clinics" className="btn-secondary">
                    Compare clinic fees
                  </a>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <p className="eyebrow">
              Question {step + 1} of {questions.length}
            </p>
            <fieldset className="mt-5" disabled={!ready}>
              <legend className="headline text-[24px] md:text-[30px]">
                {questions[step].title}
              </legend>
              <div className="mt-6 grid gap-3">
                {questions[step].options.map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    className={buttonClass}
                    onClick={() => setAnswers([...answers, index])}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>
          </>
        )}
      </div>
      {step > 0 && (
        <button
          type="button"
          className="link-underline mt-6 font-semibold"
          onClick={() => setAnswers(complete ? [] : answers.slice(0, -1))}
        >
          {complete ? "Start again" : "Back"}
        </button>
      )}
    </div>
  );
}
