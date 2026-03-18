import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import confetti from "canvas-confetti";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/dbandita362@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New submission from your portfolio!",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        reset(); // Clears all form fields
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        }); // Triggers the party confetti
        
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="w-full lg:w-100 min-[2000px]:w-[35vw] ">
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-2 min-[2000px]:space-y-[2vh]"
      >
        {/* Name */}
        <div className="space-y-1.5 min-[2000px]:space-y-[1vh]">
          <label className="text-xs min-[2000px]:text-[0.8vw] font-medium text-gray-400 px-1 min-[2000px]:px-[0.5vw]">Name</label>

          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`w-full bg-black/5 dark:bg-white/5 border rounded-xl min-[2000px]:rounded-[0.8vw] px-4 py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1.5vh] text-sm min-[2000px]:text-[1vw]
                    ${
                      errors.name
                        ? "border-red-500 placeholder:text-red-400"
                        : "border-black/10 dark:border-white/10 placeholder:text-black/40 dark:placeholder:text-white/40 outline-none"
                    }`}
            placeholder={errors.name ? errors.name.message : "John Doe"}
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5 min-[2000px]:space-y-[1vh]">
          <label className="text-xs min-[2000px]:text-[0.8vw] font-medium text-gray-400 px-1 min-[2000px]:px-[0.5vw]">
            Email
          </label>

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className={`w-full bg-black/5 dark:bg-white/5 border rounded-xl min-[2000px]:rounded-[0.8vw] px-4 py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1.5vh] text-sm min-[2000px]:text-[1vw]
                        ${
                          errors.email
                            ? "border-red-500 placeholder:text-red-400"
                            : "border-black/10 dark:border-white/10 placeholder:text-black/40 dark:placeholder:text-white/40 outline-none"
                        }`}
            placeholder={
              errors.email ? errors.email.message : "john@example.com"
            }
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5 min-[2000px]:space-y-[1vh]">
          <label className="text-xs min-[2000px]:text-[0.8vw] font-medium text-gray-400 px-1 min-[2000px]:px-[0.5vw]">
            Message
          </label>
          <textarea
            rows={3}
            {...register("message", {
              required: "Message cannot be empty",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
            className={`w-full bg-black/5 dark:bg-white/5 border rounded-xl min-[2000px]:rounded-[0.8vw] px-4 py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1.5vh] text-sm min-[2000px]:text-[1vw] resize-none
  ${
    errors.message
      ? "border-red-500 placeholder:text-red-400"
      : "border-black/10 dark:border-white/10  placeholder:text-black/40 dark:placeholder:text-white/40 outline-none"
  }
  `}
            placeholder={
              errors.message
                ? errors.message.message
                : "Tell me about your project..."
            }
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full font-semibold rounded-xl min-[2000px]:rounded-[0.8vw] px-4 py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1.5vh] transition-all duration-300 text-sm min-[2000px]:text-[1vw] ${
            isSubmitting
              ? "bg-black text-white dark:bg-white dark:text-black opacity-50 cursor-not-allowed"
              : isSuccess
              ? "bg-emerald-500 text-white cursor-default"
              : "bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          {isSubmitting ? "Sending..." : isSuccess ? "Message Sent! ✨" : "Send Message"}
        </button>
      </form>
    </div>
  );
};
