import { useState } from "react";
import { Plus } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-answer-${index}`;

  return (
    <div className={`faq-item${open ? " faq-open" : ""}`}>
      <h3>
        <button type="button" className="faq-question" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>
          <span><i>{String(index + 1).padStart(2, "0")}</i>{question}</span>
          <Plus aria-hidden="true" size={19} />
        </button>
      </h3>
      <div id={panelId} className="faq-answer" hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
