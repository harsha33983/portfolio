import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { contactEmail, whatsappLink } from "../data/portfolio";

const projectTypes = [
  "Website Design",
  "Business Website",
  "Restaurant / Cafe Website",
  "Landing Page",
  "Website Redesign",
  "Digital Marketing",
  "SEO",
  "Other",
];

const budgetRanges = ["Below ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000+"];

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = `Project enquiry: ${values.get("projectType") || "New project"}`;
    const body = [
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Phone / WhatsApp: ${values.get("phone") || "Not provided"}`,
      `Business: ${values.get("business") || "Not provided"}`,
      `Project type: ${values.get("projectType")}`,
      `Budget: ${values.get("budget") || "Not provided"}`,
      "",
      "Project details:",
      String(values.get("message") ?? ""),
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setNotice(contactEmail
      ? "Your email app is opening with the enquiry details ready to send."
      : "Your email app is opening. Add Hari’s email address as the recipient before sending.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div><span>01</span><h3>Tell me about it</h3></div>
        <p>Fields marked * are required.</p>
      </div>
      <div className="form-grid">
        <label className="field"><span>Name <b>*</b></span><input name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
        <label className="field"><span>Email <b>*</b></span><input type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
        <label className="field"><span>Phone / WhatsApp</span><input type="tel" name="phone" autoComplete="tel" placeholder="+91 00000 00000" maxLength={30} /></label>
        <label className="field"><span>Business name</span><input name="business" autoComplete="organization" placeholder="Your business" maxLength={120} /></label>
        <label className="field"><span>Project type <b>*</b></span><select name="projectType" defaultValue="" required><option value="" disabled>Select a project</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label className="field"><span>Budget</span><select name="budget" defaultValue=""><option value="">Select a range</option>{budgetRanges.map((range) => <option key={range}>{range}</option>)}</select></label>
        <label className="field field-full"><span>A little about the project <b>*</b></span><textarea name="message" rows={4} placeholder="What are you looking to build?" required minLength={12} maxLength={3000} /></label>
      </div>
      <div className="form-bottom">
        <button className="button button-dark form-submit" type="submit"><span>Send enquiry</span><ArrowUpRight aria-hidden="true" size={16} /></button>
        <p><Mail aria-hidden="true" size={14} /> Opens your email app to send the enquiry.</p>
      </div>
      {notice && <p className="form-notice" role="status"><Check aria-hidden="true" size={16} />{notice}</p>}
      <a className="whatsapp-link" href={whatsappLink} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" size={18} /><span>Prefer WhatsApp?<b>Start a conversation</b></span><ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </form>
  );
}
