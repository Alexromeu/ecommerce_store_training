import { EmblaCarousel } from "../components/code_carousel";
import ContactForm from "../components/contact_form/contact_form";
import { Divider } from "@mui/material";

export default function Home() {
 
  return (
    <div>
      <EmblaCarousel />
      <Divider style={{margin:20}}/>
      <ContactForm />
    </div>
  );
} 

