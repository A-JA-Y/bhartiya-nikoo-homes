// import PageHeader from "@/components/PageHeader";
import HomePageHeader from "@/components/HomePageHeader";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingcallButton";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ModalWrapper from "@/components/ModalWrapper";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomePageHeader />
      <main className="min-h-screen bg-white w-full">{children}</main>
      <ModalWrapper />
      <FloatingCall/>
      <FloatingWhatsapp />
      <Footer />
    </>
  );
}
