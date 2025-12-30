import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with INSIGN for your construction and renovation projects in Jakarta. Contact us via email, WhatsApp, or visit our office.",
};

export default function ContactPage() {
    return <ContactClient />;
}
