import ApiFake from "@/components/ApiFake";
import Headers from "@/components/Header";
import Section from "@/components/Section";
import HeaderI from "@/components/HeaderInfo";
import Heade from "@/components/Heade";

export default function Home() {
  return (
    <div>
      <Heade/>
      <HeaderI/>
      <Headers/>
      <Section/>
      <ApiFake/>
    </div>
  );
}
