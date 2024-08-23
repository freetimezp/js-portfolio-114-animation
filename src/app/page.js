
import coverImg from "/public/purple.jpg";
import VinylPlayerAnimation from "@/components/VinylPlayerAnimation";

export default function Home() {
  return (
    <>
      <VinylPlayerAnimation
        textPrimary={[
          "Fly to the moon now",
          "Fly to the moon now",
          "Fly to the moon now",
        ]}
        textSecondary="Throwback Music Vol"
        coverImg={coverImg}
      />
    </>
  );
}
