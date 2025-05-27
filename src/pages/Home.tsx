import { EmblaCarousel } from "../components/code_carousel";
import ContactForm from "../components/contact_form/contact_form";
import { Divider } from "@mui/material";
import ScrollRevealItem from "../components/ease_effect/ease_effect";

export default function Home() {
 
  return (
    <div>
      <EmblaCarousel />
      <Divider style={{margin:20}}/>
      <ScrollRevealItem>
        <ContactForm />
      </ScrollRevealItem>
       
    </div>
  );
} 

