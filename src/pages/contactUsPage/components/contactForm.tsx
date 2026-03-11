import { Input, TextArea } from "../../../components";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  Name: z.string().min(2, "Name must be at least 2 characters"),
  Email: z.email("Please enter a valid email address"),
  Phone: z.string().regex(/^\d{10,15}$/, "Enter a valid phone number"),
  Message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      Name: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  return (
    <section>
      <FormProvider {...methods}>
        <form>
          <Input
            name="Name"
            label="Your Name"
            placeholder="Your name"
            type="text"
          />
          <Input
            name="Phone"
            label="Phone Number"
            placeholder="Phone Number"
            type="text"
          />
          <Input
            label="Your Email"
            type="email"
            name="Email"
            placeholder="Your Email"
          />
          <TextArea
            name="Message"
            label="Your Message"
            placeholder="Your Message"
          />
        </form>
        <button
          type="submit"
          className="w-full cursor-pointer bg-primary-yellow text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-xl transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-yellow border border-transparent hover:border-primary-yellow"
        >
          Send Message
        </button>
      </FormProvider>
    </section>
  );
};

export { ContactForm };
