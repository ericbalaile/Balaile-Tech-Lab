function InquiryForm({ onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    onCancel();
  };

  const inputClass = "mt-2 w-full rounded-lg border p-3";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">Full Name *</label>
        <input id="name" type="text" required className={inputClass} placeholder="Enter your name" />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">Email *</label>
        <input id="email" type="email" required className={inputClass} placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="phone" className="block font-medium">Phone</label>
        <input id="phone" type="tel" className={inputClass} placeholder="Enter your phone number" />
      </div>
      <div>
        <label htmlFor="service" className="block font-medium">Interested Service</label>
        <input id="service" type="text" className={inputClass} placeholder="Travel service you need" />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium">Message *</label>
        <textarea id="message" required className={inputClass} rows="4" placeholder="Write your message" />
      </div>
      <div className="flex gap-4 pt-4">
        <button type="button" onClick={onCancel} className="flex-1 rounded-lg border p-3 hover:bg-gray-100">
          Cancel
        </button>
        <button type="submit" className="flex-1 rounded-lg bg-primary text-white p-3 hover:opacity-90">
          Send Inquiry
        </button>
      </div>
    </form>
  );
}

export default InquiryForm;
