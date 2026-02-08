"use strict";
"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { submitConsultation } from "@/actions/consultation";

const consultationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  date: z.date().optional(),
  message: z.string().optional(),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

export default function ConsultationForm() {
  const [isPending, startTransition] = React.useTransition();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const date = watch("date");

  async function onSubmit(data: ConsultationFormValues) {
    startTransition(async () => {
      try {
        const result = await submitConsultation(data);
        if (result.success) {
          toast.success("Consultation request sent!", {
            description: "We will get back to you shortly.",
          });
          reset();
        } else {
          toast.error("Something went wrong.", {
            description: result.error,
          });
        }
      } catch (error) {
         toast.error("Consultation request failed.", {
            description: "Please try again later.",
          });
      }
    });
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur shadow-2xl border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-serif font-bold text-pine-teal">Book a Consultation</CardTitle>
        <CardDescription>
          Plan your perfect event with our expert team.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-ink-black/80">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className="bg-white border-gray-200 focus:border-pine-teal focus:ring-pine-teal"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ink-black/80">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                 className="bg-white border-gray-200 focus:border-pine-teal focus:ring-pine-teal"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
             <div className="space-y-2">
              <Label htmlFor="phone" className="text-ink-black/80">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                {...register("phone")}
                 className="bg-white border-gray-200 focus:border-pine-teal focus:ring-pine-teal"
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2 flex flex-col">
            <Label className="text-ink-black/80">Preferred Date (Optional)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal border-gray-200 hover:bg-gray-50 hover:text-pine-teal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => setValue("date", date)}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-ink-black/80">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your event requirements..."
              {...register("message")}
               className="bg-white border-gray-200 focus:border-pine-teal focus:ring-pine-teal min-h-[100px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#004D40] hover:bg-[#004D40]/90 text-white font-bold py-6 text-lg transition-all"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
                "Request Consultation"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
