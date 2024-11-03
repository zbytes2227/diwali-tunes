import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
        <Card name={"Ganesh Ji"} title={"Remover of Obstacles"} img={"/images/ganeshji.png"} song={"/songs/ganeshji.mp3"} />
        <Card name={"Lakshmi Ji"} title={"Goddess of Wealth"} img={"/images/lakshmiji.png"} song={"/songs/lakshmiji.mp3"} />
        <Card name={"Shiva Ji"} title={"Lord of Destruction"} img={"/images/shivji.png"} song={"/songs/shivji.mp3"} />
        <Card name={"Saraswati Ji"} title={"Goddess of Knowledge"} img={"/images/saraswatiji.png"} song={"/songs/saraswatiji.mp3"} />
        <Card name={"Hanuman Ji"} title={"Devotee of Lord Rama"} img={"/images/hanumanji.png"} song={"/songs/hanumanji.mp3"} />
        <Card name={"Ram Ji"} title={"Seventh Avatar of Vishnu"} img={"/images/ramji.png"} song={"/songs/ramji.mp3"} />
        <Card name={"Vishnu Ji"} title={"Preserver of the Universe"} img={"/images/vishnuji.png"} song={"/songs/vishnuji.mp3"} />
        <Card name={"Krishna Ji"} title={"God of Compassion"} img={"/images/krishnaji.png"} song={"/songs/krishnaji.mp3"} />
        <Card name={"Durga Ji"} title={"Goddess of Power"} img={"/images/durgaji.png"} song={"/songs/durgaji.mp3"} />
        <Card name={"Kali Ji"} title={"Goddess of Time and Change"} img={"/images/kaliji.png"} song={"/songs/kaliji.mp3"} />

      </div>
      <div className="flex justify-center py-5 text-md font-semibold">
      <a href="https://zbytes.vercel.app">Made By Ujjwal Kushwaha (PROJECT FOR CODE AAKAAR)</a>
      </div>
    </>
  );
}
