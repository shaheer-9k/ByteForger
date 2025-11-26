import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message: string, type: any) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data: any) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="ContactForm bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/5 via-transparent to-darkPink/5 pointer-events-none"></div>
      
      {/* Alert Section */}
      {alertInfo.display && (
        <div
          className={`alert fixed top-4 right-4 max-w-sm p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
            alertInfo.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{alertInfo.message}</span>
            <button
              type="button"
              className="ml-4 text-white hover:text-gray-200 transition-colors"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Form Section */}
      <div className="relative z-10">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-darkBlue font-play mb-2">
            Send us a Message
          </h2>
          <p className="text-gray-600 text-sm lg:text-base">
            Fill out the form below and we'll get back to you soon
          </p>
        </div>
        
        <div className="w-full max-w-2xl mx-auto">
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4 lg:space-y-6"
          >
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-darkBlue/20 ${
                    errors.name 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300 focus:border-darkBlue'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {typeof errors.name.message === "string" && errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 block">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-darkBlue/20 ${
                    errors.email 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300 focus:border-darkBlue'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 block">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Please enter a subject",
                  },
                  maxLength: {
                    value: 75,
                    message: "Please use 75 characters or less",
                  },
                })}
                className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-darkBlue/20 ${
                  errors.subject 
                    ? 'border-red-300 bg-red-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300 focus:border-darkBlue'
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <span className="text-red-500 text-xs mt-1 block flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {typeof errors.subject.message === "string" && errors.subject.message}
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 block">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                {...register("message", {
                  required: true,
                })}
                className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-darkBlue/20 resize-none ${
                  errors.message 
                    ? 'border-red-300 bg-red-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300 focus:border-darkBlue'
                }`}
                placeholder="Tell us about your project or question..."
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs mt-1 block flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Please enter a message
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                className={`w-full lg:w-auto px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 text-sm lg:text-base ${
                  disabled 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-darkBlue to-neonPink hover:from-darkBlue/90 hover:to-neonPink/90 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                }`}
                disabled={disabled}
                type="submit"
              >
                {disabled ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;