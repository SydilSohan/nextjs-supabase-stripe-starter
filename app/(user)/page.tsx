import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import { Metadata } from "next";
import config from "@/app.config.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MyThree from "./Three";
export const metadata: Metadata = {
  title: config.appName,
  description: config.metaDescription,
  keywords: config.keywords,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL!,
    type: "website",
    title: config.appName,
    description: config.metaDescription,
    images: [
      {
        url: config.brandLogo,
        width: 1200,
        height: 630,
        alt: config.appName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.appName,
    description: config.metaDescription,
    creator: config.author,
    site: process.env.NEXT_PUBLIC_SITE_URL!,
    images: [
      {
        url: config.brandLogo,
        width: 1200,
        height: 630,
        alt: config.appName,
      },
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL!,
  },
};
export default async function Index() {
  return (
    <main className="max-w-screen-xl mx-auto  py-12">
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-bold">Welcome to Three js</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          We make really good 3d elements
          <MyThree />
        </CardContent>
      </Card>
    </main>
  );
}
