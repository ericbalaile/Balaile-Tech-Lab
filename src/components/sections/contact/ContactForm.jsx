import { useState } from "react";
import Container from "../../ui/Container.jsx";
import Section from "../../ui/Section.jsx";
import Button from "../../ui/Button.jsx";
import { contactForm } from "../../../data/contactData.js";

export default function ContactForm({ noSection = false }) {
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  const formContent = (
    <>
      <h2 className="text-3xl font-bold text-primary">{contactForm.title}</h2>
      <p className="mt-4 text-lg text-gray-600">{contactForm.description}</p>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {contactForm.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block font-medium text-gray-900">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:ring-1 focus:ring-primary"
                rows="5"
                placeholder={field.placeholder}
                required
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={field.placeholder}
                required
              />
            )}
          </div>
        ))}
        
        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : contactForm.buttonLabel}
        </Button>
      </form>
    </>
  );

  const successContent = (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-primary">Message Sent</h2>
      <p className="mt-4 text-lg text-gray-700">{contactForm.successMessage}</p>
    </div>
  );

  if (noSection) {
    return status === "success" ? successContent : formContent;
  }

  return (
    <Section background="light">
      <Container className="max-w-2xl">
        {status === "success" ? successContent : formContent}
      </Container>
    </Section>
  );
}
