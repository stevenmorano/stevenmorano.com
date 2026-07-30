import About from "@/components/About";
import Connect from "@/components/Connect";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Proof from "@/components/Proof";
import { siteContent } from "@/data/siteContent";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://stevenmorano.com/#website",
      url: "https://stevenmorano.com/",
      name: "Steven Morano",
      description:
        "The personal website of Steven Morano, a marketing operations leader who uses AI and software to build practical tools.",
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://stevenmorano.com/#profile",
      url: "https://stevenmorano.com/",
      name: "Steven Morano | Marketing Operations Leader",
      isPartOf: {
        "@id": "https://stevenmorano.com/#website",
      },
      mainEntity: {
        "@id": "https://stevenmorano.com/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://stevenmorano.com/#person",
      name: "Steven Morano",
      url: "https://stevenmorano.com/",
      image: "https://stevenmorano.com/images/steven-morano.png",
      email: `mailto:${siteContent.identity.email}`,
      jobTitle: "Marketing Operations Leader",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rye Brook",
        addressRegion: "NY",
        addressCountry: "US",
      },
      knowsAbout: [
        "Marketing operations",
        "Marketing strategy",
        "Customer relationship management",
        "Marketing automation",
        "Paid media",
        "Ecommerce",
        "Artificial intelligence",
        "AI-assisted product development",
      ],
      sameAs: [
        "https://www.linkedin.com/in/stevenmorano/",
        "https://github.com/stevenmorano",
        "https://x.com/SteveMorano",
        "https://smart.stevenmorano.com/",
        "https://www.skool.com/working-from-home-with-adhd-7671/",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation
        email={siteContent.identity.email}
        items={siteContent.navigation}
      />
      <main id="main-content">
        <Hero />
        <Proof />
        <Experience />
        <Projects />
        <About />
        <Connect />
      </main>
      <Footer />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
    </>
  );
}
