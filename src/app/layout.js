import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Providers from "../Components/Theme/Providers";
import NavBar from "@/Components/NavBar/NavBar";
import SearchBox from "@/Components/SearchBox/SearchBox";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loading from "@/Components/Loading/Loading";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: "TMDB Clone",
  description: "This is a Movie Database Clone",
  icons: {
    icon: ["/favicon.ico?v=2"],
    apple: [{ url: "/apple-touch-icon.png?v=2" }],
  },
};

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            <Loading />
          </ClerkLoading>
          <ClerkLoaded>
            <Providers>
              <Header />
              <NavBar />
              <SearchBox />
              {children}
              <Footer/>
            </Providers>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
