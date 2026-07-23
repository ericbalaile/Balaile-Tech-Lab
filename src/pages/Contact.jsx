import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";

function Contact() {
  const contactOptions = [
    {
      title: "Travel Consultation",
      description:
        "Get professional guidance based on your travel goals, preferences, and requirements.",
    },
    {
      title: "Service Inquiry",
      description:
        "Learn more about our travel solutions and available services designed around your needs.",
    },
    {
      title: "Customer Support",
      description:
        "Receive assistance and guidance throughout your travel planning journey.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section>
        <Container>
          <h1 className="text-4xl font-bold md:text-6xl">
            Let's Plan Your Journey
          </h1>

          <p className="mt-6 text-lg">
            Connect with Global Work and Travel Ltd for professional travel
            guidance, service inquiries, and personalized support.
          </p>
        </Container>
      </Section>

      {/* Contact Options */}
      <Section background="light">
        <Container>
          <h2 className="text-3xl font-bold">How Can We Help You?</h2>

          <p className="mt-4 text-lg">
            Our team is ready to support your travel planning needs with
            professional assistance and reliable guidance.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {contactOptions.map((option) => (
              <Card key={option.title}>
                <h3 className="text-xl font-semibold">{option.title}</h3>

                <p className="mt-4">{option.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Inquiry + Location */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Inquiry Form */}
            <div>
              <h2 className="text-3xl font-bold">Send Us An Inquiry</h2>

              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium">
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    className="mt-2 w-full rounded-lg border p-3"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full rounded-lg border p-3"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    className="mt-2 w-full rounded-lg border p-3"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block font-medium">Service Required</label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border p-3"
                    placeholder="Travel service you need"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium">
                    Message
                  </label>

                  <textarea
                    id="message"
                    className="mt-2 w-full rounded-lg border p-3"
                    rows="5"
                    placeholder="Write your message"
                  />
                </div>

                <Button type="submit" variant="primary">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Location */}
            <div>
              <Card>
                <h2 className="text-3xl font-bold">Our Location</h2>

                <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-gray-200">
                  <p className="text-center text-gray-600">
                    Office Location Map
                    <br />
                    Victoria Palace, Kijitonyama
                  </p>
                </div>

                <p className="mt-6">
                  Global Work and Travel Ltd
                  <br />
                  Victoria Palace,
                  <br />
                  Kijitonyama,
                  <br />
                  Dar es Salaam
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <Container>
          <h2 className="text-3xl font-bold">
            Start Your Travel Journey Today
          </h2>

          <p className="mt-4">
            Reach out to our team and receive professional support for your
            travel plans.
          </p>

          <div className="mt-8">
            <Button variant="primary">Get Started</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
