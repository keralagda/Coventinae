"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send, Loader2 } from "lucide-react"
import { submitContact } from "@/app/actions/contact"

const initialState = {
  message: "",
  success: false
}

export default function ContactContent() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-pine-teal">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-fade-in-up">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light text-white/90">Get in touch with us for your perfect getaway.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <h2 className="text-3xl font-serif font-bold text-pine-teal mb-6">Send us a Message</h2>
               
               {state.success ? (
                   <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                       <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                       <p className="text-green-700">{state.message}</p>
                       <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => window.location.reload()}
                       >
                           Send Another Message
                       </Button>
                   </div>
               ) : (
                <form action={formAction} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">First Name</label>
                            <Input name="firstName" placeholder="John" required />
                            {state?.errors?.firstName && <p className="text-red-500 text-sm">{state.errors.firstName[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Last Name</label>
                            <Input name="lastName" placeholder="Doe" required />
                            {state?.errors?.lastName && <p className="text-red-500 text-sm">{state.errors.lastName[0]}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input name="email" type="email" placeholder="john@example.com" required />
                        {state?.errors?.email && <p className="text-red-500 text-sm">{state.errors.email[0]}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Message</label>
                        <Textarea name="message" placeholder="Tell us about your trip plans..." className="min-h-[150px]" required />
                        {state?.errors?.message && <p className="text-red-500 text-sm">{state.errors.message[0]}</p>}
                    </div>
                    
                    {state?.message && !state.success && (
                        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
                            {state.message}
                        </div>
                    )}

                    <Button 
                        type="submit" 
                        disabled={isPending}
                        className="w-full bg-pine-teal hover:bg-pine-teal/90 size-lg text-lg text-white font-bold"
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" /> Send Message
                            </>
                        )}
                    </Button>
                </form>
               )}
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-porcelain rounded-xl border border-ink-black/5">
                         <Phone className="h-8 w-8 text-pine-teal mb-4" />
                         <h3 className="font-bold text-pine-teal mb-2">Phone</h3>
                         <p className="text-gray-600 text-sm">9211997746</p>
                         <p className="text-gray-600 text-sm">8086868628</p>
                     </div>
                     <div className="p-6 bg-porcelain rounded-xl border border-ink-black/5">
                         <Mail className="h-8 w-8 text-pine-teal mb-4" />
                         <h3 className="font-bold text-pine-teal mb-2">Email</h3>
                         <p className="text-gray-600 text-sm">rohan@coventina.net</p>
                         <p className="text-gray-600 text-sm">admin@coventina.net</p>
                     </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px] w-full relative">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d251771.78052300418!2d76.44354817427491!3d9.60094560092737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzcnMjAuMiJOIDc2wrAyNSc0Ny42IkU!5e0!3m2!1sen!2sin!4v1740977574479!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
