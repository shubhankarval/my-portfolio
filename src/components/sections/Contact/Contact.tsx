"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@lib/actions";
import { contactFormSchema, type ContactFormData } from "@lib/schema";
import { Textarea } from "@nextui-org/input";
import { useController, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Input from "./Input";

export default function Contact() {
  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const {
    field,
    fieldState: { error },
  } = useController({
    name: "message",
    control,
  });

  const onSubmit = async (data: ContactFormData) => {
    const emailSent = await sendEmail(data);

    // const emailSent = true;
    if (emailSent) {
      toast.success("Email has been recieved!");
    } else {
      toast.error("Error occured! Email was not recieved.");
    }
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          {inputData.map((input, index) => (
            <Input
              key={input.name}
              control={control}
              label={input.label}
              name={input.name}
              {...(index === 2 && { className: "col-span-2" })}
            />
          ))}
        </div>
        <Textarea
          isRequired
          className="my-5"
          errorMessage={error?.message}
          isInvalid={!!error}
          label="Message"
          labelPlacement="inside"
          name={field.name}
          placeholder="Enter your message"
          value={field.value}
          variant="bordered"
          onValueChange={field.onChange}
        />
        <div className="flex justify-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

const inputData = [
  { label: "Name", name: "name" },
  { label: "Email", name: "email" },
  { label: "Subject", name: "subject" },
];
