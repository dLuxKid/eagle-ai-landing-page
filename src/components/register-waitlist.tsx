"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const url = "https://dummy-api.eagleairesearch.com/submit";

export default function RegisterWaitlist() {
  const [waitlistInfo, setWaitlistInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    telegram: "",
  });
  const [status, setStatus] = useState<"stale" | "loading" | "error">("stale");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaitlistInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post(url, waitlistInfo, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        setStatus("stale");
        toast.success("Successfully registered. Thank you!");
        setWaitlistInfo({
          email: "",
          firstName: "",
          lastName: "",
          telegram: "",
        });
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setStatus("error");
      toast.error("Registration failed. Please try again later.");
    }
  };

  return (
    <form
      className="flex flex-col space-y-[31px] w-2/5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
        value={waitlistInfo.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
        className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
        value={waitlistInfo.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        required
        className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
        value={waitlistInfo.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="telegram"
        placeholder="Telegram Username"
        pattern="^@[a-zA-Z0-9_]{5,32}$"
        title="Please enter a valid Telegram username starting with @ and containing 5-32 letters, numbers, or underscores."
        required
        className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
        value={waitlistInfo.telegram}
        onChange={handleChange}
      />
      <div className="self-end">
        <button
          type="submit"
          disabled={status === "loading"}
          className="button-gradient font-normal text-base/[21.79px] open-sans transition-all hover:bg-opacity-80 disabled:opacity-50"
        >
          {status === "loading" ? <Loader /> : "Register your interest now"}
        </button>
      </div>
    </form>
  );
}

function Loader() {
  return (
    <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
  );
}
