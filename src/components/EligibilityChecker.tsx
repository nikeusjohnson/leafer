"use client";

import { useState } from "react";
import Link from "next/link";

type Step = 0 | 1 | 2 | 3;
type Outcome = "likely" | "maybe-not" | "not-uk" | null;

const conditionOptions = [
  { label: "Chronic pain", hint: "Back pain, neuropathy, fibromyalgia" },
  { label: "Mental health", hint: "Anxiety, PTSD, depression, OCD" },
  { label: "Neurological", hint: "MS, epilepsy, Tourette syndrome" },
  { label: "Sleep", hint: "Insomnia linked to a chronic condition" },
  { label: "Something else", hint: "Cancer-related, autoimmune, other" },
];

const treatmentOptions = [
  { label: "Yes — two or more", value: "two" },
  { label: "Only one so far", value: "one" },
  { label: "Not yet", value: "none" },
  { label: "I'm not sure", value: "unsure" },
];

export default function EligibilityChecker() {
  const [step, setStep] = useState<Step>(0);
  const [treatments, setTreatments] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<Outcome>(null);

  const restart = () => {
    setStep(0);
    setTreatments(null);
    setOutcome(null);
  };

  const optionClass =
    "w-full rounded-2xl border border-line bg-cream-tint px-5 py-4 text-left transition-all duration-fast ease-out hover:-translate-y-0.5 hover:border-leaf/50 hover:shadow-soft focus-visible:border-leaf";

  if (outcome) {
    return (
      <div className="card mx-auto max-w-2xl p-8 md:p-10">
        {outcome === "likely" ? (
          <>
            <p className="eyebrow">Your result</p>
            <h2 className="headline mt-3 text-[28px] md:text-[34px]">
              You <em>appear</em> to be eligible
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-ink-soft">
              Based on your answers, you&apos;re likely to qualify for a
              consultation with a specialist clinic. Only a GMC-registered
              specialist can say for certain, but you tick the boxes that
              clinics usually look for.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/clinics" className="btn-primary">
                Browse licensed clinics
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                See how the process works
              </Link>
            </div>
          </>
        ) : outcome === "maybe-not" ? (
          <>
            <p className="eyebrow">Your result</p>
            <h2 className="headline mt-3 text-[28px] md:text-[34px]">
              You might not qualify <em>just yet</em>
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-ink-soft">
              UK guidelines expect patients to have tried at least two
              conventional treatments before a specialist will consider medical
              cannabis. It&apos;s worth chatting to your GP about other options
              first — and you can always come back once you&apos;ve tried them.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/conditions" className="btn-primary">
                Read about qualifying conditions
              </Link>
              <Link href="/faq" className="btn-secondary">
                Browse the patient FAQ
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="eyebrow">Your result</p>
            <h2 className="headline mt-3 text-[28px] md:text-[34px]">
              This is for <em>UK residents</em> only
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-ink-soft">
              Medical cannabis prescriptions through UK clinics are only
              available to people living in the United Kingdom. Rules differ
              considerably from country to country, so it&apos;s best to check
              the guidance where you live.
            </p>
          </>
        )}
        <button
          type="button"
          onClick={restart}
          className="mt-8 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
        >
          Start again
        </button>
      </div>
    );
  }

  return (
    <div className="card mx-auto max-w-2xl p-8 md:p-10">
      <p className="eyebrow">Step {step + 1} of 3 · about a minute</p>

      {step === 0 && (
        <fieldset className="mt-5">
          <legend className="headline text-[24px] md:text-[28px]">
            What are you mainly seeking help with?
          </legend>
          <p className="mt-2 text-[15px] text-ink-muted">
            Choose whichever fits best — there&apos;s no wrong answer here.
          </p>
          <div className="mt-6 grid gap-3">
            {conditionOptions.map((o) => (
              <button key={o.label} type="button" className={optionClass} onClick={() => setStep(1)}>
                <span className="block text-[16px] font-semibold text-ink">{o.label}</span>
                <span className="mt-0.5 block text-[14px] text-ink-muted">{o.hint}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="mt-5">
          <legend className="headline text-[24px] md:text-[28px]">
            Have you tried at least two conventional treatments?
          </legend>
          <p className="mt-2 text-[15px] text-ink-muted">
            Things like prescription medication, physiotherapy, CBT, or
            specialist referrals all count.
          </p>
          <div className="mt-6 grid gap-3">
            {treatmentOptions.map((o) => (
              <button
                key={o.value}
                type="button"
                className={optionClass}
                onClick={() => {
                  setTreatments(o.value);
                  setStep(2);
                }}
              >
                <span className="block text-[16px] font-semibold text-ink">{o.label}</span>
              </button>
            ))}
          </div>
          <BackButton onClick={() => setStep(0)} />
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="mt-5">
          <legend className="headline text-[24px] md:text-[28px]">
            Do you currently live in the UK?
          </legend>
          <p className="mt-2 text-[15px] text-ink-muted">
            Prescriptions from UK clinics are only available to UK residents.
          </p>
          <div className="mt-6 grid gap-3">
            <button
              type="button"
              className={optionClass}
              onClick={() =>
                setOutcome(
                  treatments === "two" || treatments === "unsure"
                    ? "likely"
                    : "maybe-not"
                )
              }
            >
              <span className="block text-[16px] font-semibold text-ink">
                Yes, I live in the UK
              </span>
            </button>
            <button
              type="button"
              className={optionClass}
              onClick={() => setOutcome("not-uk")}
            >
              <span className="block text-[16px] font-semibold text-ink">
                No, I live elsewhere
              </span>
            </button>
          </div>
          <BackButton onClick={() => setStep(1)} />
        </fieldset>
      )}
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
    >
      ← Back
    </button>
  );
}
