import RedirectToApp from "@/components/redirect";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "RetentionAI - App",
    openGraph: {
      title: "RetentionAI - App",
      description:
        "RetentionAI lets you create questions and recall answers. Get AI suggestions to improve your answers and personalised reminders on when to revisit questions to improve retention.",
      images: [
        `https://res.cloudinary.com/dgdnihwti/image/upload/v1732793141/retentionai_banner_yostes.png`,
      ],
    },
  };
}

export default function Home() {
  return <RedirectToApp />;
}
