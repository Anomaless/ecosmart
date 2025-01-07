import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQView() {
  return (
    <section className="py-12">
      <div className="text-start max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <h2 className="text-2xl font-bold text-[#2b7a0b] mb-8 text-center">
          FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Apa itu EcoSmart?</AccordionTrigger>
            <AccordionContent>
              EcoSmart adalah platform yang didedikasikan untuk mempromosikan
              produk yang berkelanjutan dan ramah lingkungan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Bagaimana cara membeli produk?</AccordionTrigger>
            <AccordionContent>
              Anda dapat membeli produk langsung melalui platform kami dengan
              mengunjungi halaman produk dan mengikuti instruksi pembelian.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Apakah produknya ramah lingkungan?
            </AccordionTrigger>
            <AccordionContent>
              Ya, semua produk yang terdaftar di EcoSmart telah diperiksa dengan
              cermat untuk memastikan mereka memenuhi kriteria keberlanjutan dan
              ramah lingkungan kami.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Bagaimana cara menghubungi dukungan pelanggan?
            </AccordionTrigger>
            <AccordionContent>
              Anda dapat menghubungi tim dukungan pelanggan kami melalui
              formulir kontak di situs web kami atau dengan mengirim email ke
              support@ecosmart.com.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
