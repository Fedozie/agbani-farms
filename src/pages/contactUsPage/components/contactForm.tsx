import { Input, TextArea, Select } from "../../../components";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const serviceOptions = [
  "Product Enquiry",
  "Training Registration",
  "Consultancy",
  "Media",
  "General Enquiry",
];

const contactFormSchema = z.object({
  Name: z.string().min(2, "Name must be at least 2 characters"),
  Email: z.email("Please enter a valid email address"),
  Phone: z.string().regex(/^\d{10,15}$/, "Enter a valid phone number"),
  Subject: z
    .string()
    .min(1)
    .refine((value) => serviceOptions.includes(value), {
      message: "Please select the service that you would like to receive",
    }),
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

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = methods;

  const servicesData = [
    { label: "Product Enquiry", value: "Product Enquiry" },
    {
      label: "Training Registration",
      value: "Training Registration",
    },
    {
      label: "Consultancy",
      value: "Consultancy",
    },
    {
      label: "Media",
      value: "Media",
    },
    {
      label: "General Enquiry",
      value: "General Enquiry",
    },
  ];

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
            label="Your Email"
            type="email"
            name="Email"
            placeholder="Your Email"
          />
          <Input
            name="Phone"
            label="Phone Number"
            placeholder="Phone Number"
            type="text"
          />
          <Select
            name="Subject"
            placeholder="Subject"
            options={servicesData}
            label="Subject"
          />
          <TextArea
            name="Message"
            label="Your Message/Order"
            placeholder="Your Message/Order"
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
