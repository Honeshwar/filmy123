"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let data = new FormData(e.target as HTMLFormElement);
    const response = await fetch("https://formspree.io/f/movegred", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("Your message has been sent. We'll get back to you soon!");
    } else {
      console.error(await response.json());
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 mb-6">
                We&apos;d love to hear from you. Whether you have questions
                about our service, need technical support, or want to provide
                feedback, our team is here to help.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Contact Information
              </h2>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Email:</span>
                  <a
                    href="mailto:filmy123@gmail.com"
                    className="text-tubiYellow hover:underline"
                  >
                    filmy123@gmail.com
                  </a>
                </li>
                {/* <li className="flex items-start">
                    <span className="font-medium mr-2">Phone:</span> 
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Address:</span> 
                    <span>123 Streaming Boulevard, San Francisco, CA 94105</span>
                  </li> */}
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Hours of Operation
              </h2>
              <p className="text-white/80">
                Our support team is available Saturday through Sunday, 9am to
                9pm PT.
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-tubiPurple/40 p-6 rounded-lg border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-tubiPurple/70 border-white/20 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-tubiPurple/70 border-white/20 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-md border border-white/20 bg-tubiPurple/70 p-3 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90 mt-2"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
