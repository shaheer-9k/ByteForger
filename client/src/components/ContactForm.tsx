import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Send, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' });
        reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus?.type === 'success') {
    return (
      <div className="ContactForm bg-white dark:bg-gray-900/50 dark:backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 lg:p-12 relative overflow-hidden transition-colors duration-300 min-h-[400px] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/5 via-transparent to-darkPink/5 pointer-events-none"></div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
          <Send className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400 ml-1" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-darkBlue dark:text-lightBlue font-play mb-3">
          Message Sent!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-md mx-auto">
          Thank you for reaching out. We've received your message and will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setSubmitStatus(null);
            reset();
          }}
          className="px-8 py-3 bg-gradient-to-r from-darkBlue to-neonPink hover:from-darkBlue/90 hover:to-neonPink/90 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="ContactForm bg-white dark:bg-gray-900/50 dark:backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 lg:p-8 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/5 via-transparent to-darkPink/5 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black dark:text-lightBlue font-play mb-2">
            Send us a Message
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 text-sm lg:text-base">
            Fill out the form below and we'll get back to you soon
          </p>
        </div>

        {submitStatus?.type === 'error' && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-red-800 dark:text-red-300">Submission Failed</h4>
              <p className="text-sm text-red-700 dark:text-red-400 mt-1">{submitStatus.message}</p>
            </div>
            <button
              onClick={() => setSubmitStatus(null)}
              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-200"
            >
              <span className="sr-only">Dismiss</span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        <div className="w-full max-w-2xl mx-auto">
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4 lg:space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-lightBlue">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`p-4 h-auto rounded-xl border-2 dark:bg-gray-950/60 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-400 focus-visible:ring-4 focus-visible:ring-blue-500/20 ${errors.name
                    ? 'border-red-300 bg-red-50 focus-visible:ring-red-500'
                    : ''
                    }`}
                  placeholder="Enter your full name"
                  data-testid="input-name"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 flex items-center" data-testid="error-name">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-lightBlue">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`p-4 h-auto rounded-xl border-2 dark:bg-gray-950/60 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-400 focus-visible:ring-4 focus-visible:ring-blue-500/20 ${errors.email
                    ? 'border-red-300 bg-red-50 focus-visible:ring-red-500'
                    : ''
                    }`}
                  placeholder="Enter your email address"
                  data-testid="input-email"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 flex items-center" data-testid="error-email">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium text-gray-800 dark:text-lightBlue">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input
                id="subject"
                type="text"
                {...register("subject")}
                className={`p-4 h-auto rounded-xl border-2 dark:bg-gray-950/60 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-400 focus-visible:ring-4 focus-visible:ring-blue-500/20 ${errors.subject
                  ? 'border-red-300 bg-red-50 focus-visible:ring-red-500'
                  : ''
                  }`}
                placeholder="What's this about?"
                data-testid="input-subject"
              />
              {errors.subject && (
                <span className="text-red-500 text-xs mt-1 flex items-center" data-testid="error-subject">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-lightBlue">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                rows={4}
                {...register("message")}
                className={`p-4 resize-none rounded-xl border-2 dark:bg-gray-950/60 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-400 focus-visible:ring-4 focus-visible:ring-blue-500/20 ${errors.message
                  ? 'border-red-300 bg-red-50 focus-visible:ring-red-500'
                  : ''
                  }`}
                placeholder="Tell us about your project or question..."
                data-testid="input-message"
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1 flex items-center" data-testid="error-message">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="pt-2">
              <Button
                className="w-full lg:w-auto px-8 py-6 bg-gradient-to-r from-darkBlue to-neonPink hover:from-darkBlue/90 hover:to-neonPink/90 text-white font-semibold text-sm lg:text-base rounded-xl shadow-md hover:shadow-lg transition-all"
                disabled={isSubmitting}
                type="submit"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin -ml-1 mr-3 h-4 w-4" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
