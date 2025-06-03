import ApiFake from "@/components/ApiFake";
import Headers from "@/components/Header";
import Section from "@/components/Section";
import HeaderI from "@/components/HeaderInfo";

export default function Home() {
  return (
    <div>
      <HeaderI/>
      <Headers/>
      <Section/>
      <ApiFake/>
    </div>
  );
}
