"use client";

import { Button } from "@/components/ui/button";
import { BanknoteXIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
interface MovieRequestData {
  name: string;
  email: string;
  movieName: string;
  message: string;
}

export default function MovieRequestPage() {
  const [formData, setFormData] = useState<MovieRequestData>({
    name: "",
    email: "",
    movieName: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the data to a backend or email API
    // var status = document.getElementById("my-form-status");

    let data = new FormData(event.target as HTMLFormElement);
    const response = await fetch("https://formspree.io/f/movegred", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // status.innerHTML = "Thanks for your submission!";
      // form.reset()
      setFormData({
        name: "",
        email: "",
        movieName: "",
        message: "",
      });
      toast.success("Your request has been submitted. We'll try to add it soon!");
      setSubmitted(true);
      window.scrollTo(0, 0);
    } else {
      await response.json().then((data) => {
        console.error(data);
        toast.error("There was a problem submitting your request.");
        // if (Object.hasOwn(data, 'errors')) {
        //   status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        // } else {
        //   status.innerHTML = "Oops! There was a problem submitting your form"
        // }
      });
      // status.innerHTML = "Oops! There was a problem submitting your form"
    }

    // setSubmitted(true)
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 pt-24 flex flex-col">
      {!submitted ? (
        <>
          <div className=" bg-gray-900 p-6 rounded-lg text-white">
            <h2 className="text-xl font-semibold mb-2">🔍 How to Request?</h2>
            <p>1. Enter your name and movie/TV show title.</p>
            <p>2. Add a year or season if possible.</p>
            <p>3. Optional: Add your email if you want updates.</p>
            <p>4. Click on “Submit Request” and done!</p>
          </div>
          <div>
            <h1 className="mt-10 text-3xl font-bold mb-6 text-white text-center">
              🎬 Movie Request
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#1e1e1e] p-6 rounded-xl shadow-md"
              action="https://formspree.io/f/movegred"
              method="POST"
            >
              <div>
                <label className="block text-white mb-1">
                  Your Name (optional)
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                  placeholder="johndoe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">
                  Movie/TV Show/Web Series Name
                </label>
                <input
                  name="movieName"
                  type="text"
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                  placeholder="Example: Inception (2010)"
                  value={formData.movieName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">
                  Additional Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                  placeholder="Write anything if needed..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit Request
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="text-center text-white h-[calc(100vh-300px)] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-2">✅ Thank you!</h2>
          <p className="px-4">
            Your request has been submitted. We’ll try to add it soon!
          </p>
          <p className="mt-5 flex flex-col justify-center items-center ">
            {/* Go and Browse others movies */}
            <Link href={"/browse"}>
              <Button className="cursor-pointer flex bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90">
                <BanknoteXIcon className="mr-0 h-4 w-4" />
                Browse Movies
              </Button>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
