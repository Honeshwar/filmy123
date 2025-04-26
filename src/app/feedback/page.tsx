"use client";

import { Button } from "@/components/ui/button";
import { BanknoteXIcon } from "lucide-react";
import { useState } from "react";

export default function ImprovementSuggestionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    area: "",
    suggestion: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Improvement Suggestion:", formData);

    // @ts-ignore
    let data = new FormData(event.target);
    const response = await fetch("https://formspree.io/f/movegred", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        area: "",
        suggestion: "",
      });
      setSubmitted(true);
    } else {
      console.log(await response.json());
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 pt-24 ">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        🔧 Suggest an Improvement
      </h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1f1f1f] p-6 rounded-xl shadow-md "
        >
          <div>
            <label className="block text-white mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded bg-[#2b2b2b] text-white border border-gray-600"
              placeholder="Jane Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-white mb-1">Email (optional)</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded bg-[#2b2b2b] text-white border border-gray-600"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-white mb-1">Area to Improve</label>
            <select
              name="area"
              className="w-full p-2 rounded bg-[#2b2b2b] text-white border border-gray-600"
              value={formData.area}
              onChange={handleChange}
              required
            >
              <option value="">Select an area</option>
              <option value="UI">User Interface</option>
              <option value="Performance">Performance</option>
              <option value="Content">Content Clarity</option>
              <option value="Accessibility">Accessibility</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-1">Your Suggestion</label>
            <textarea
              name="suggestion"
              rows={4}
              className="w-full p-2 rounded bg-[#2b2b2b] text-white border border-gray-600"
              placeholder="We’d love to hear your ideas for making this better..."
              required
              value={formData.suggestion}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit Suggestion
          </button>
        </form>
      ) : (
        <div className="text-center text-white   h-1/2 ">
          <h2 className="text-2xl font-bold mb-2">
            🎉 Thanks for the suggestion!
          </h2>
          <p>
            We're grateful for your insight and will take it into consideration.
          </p>
          <p className="mt-5 flex flex-col justify-center items-center ">
            {/* Go and Browse others movies */}
            <Button className="cursor-pointer hidden md:flex bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90">
              <BanknoteXIcon className="mr-0 h-4 w-4" />
              Browse Movies
            </Button>
          </p>
        </div>
      )}
    </div>
  );
}
