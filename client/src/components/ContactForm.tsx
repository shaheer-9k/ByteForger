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

  return (
    <div className="ContactForm bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/5 via-transparent to-darkPink/5 pointer-events-none"></div>
      
      {submitStatus && (
        <div
          className={`alert fixed top-4 right-4 max-w-sm p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
            submitStatus.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
          data-testid={`alert-${submitStatus.type}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{submitStatus.message}</span>
            <button
              type="button"
              className="ml-4 text-white hover:text-gray-200 transition-colors"
              onClick={() => setSubmitStatus(null)}
              data-testid="button-close-alert"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black dark:text-white font-play mb-2">
            Send us a Message
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-white">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`dark:bg-gray-950 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-300 ${
                    errors.name 
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
                <Label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-white">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`dark:bg-gray-950 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-300 ${
                    errors.email 
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
              <Label htmlFor="subject" className="text-sm font-medium text-gray-800 dark:text-white">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input
                id="subject"
                type="text"
                {...register("subject")}
                className={`dark:bg-gray-950 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-300 ${
                  errors.subject 
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
              <Label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-white">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                rows={4}
                {...register("message")}
                className={`resize-none dark:bg-gray-950 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-300 ${
                  errors.message 
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
                className="w-full lg:w-auto px-8 py-6 bg-gradient-to-r from-darkBlue to-neonPink hover:from-darkBlue/90 hover:to-neonPink/90 text-white font-semibold text-sm lg:text-base"
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
