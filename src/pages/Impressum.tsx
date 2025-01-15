import React from 'react';

export default function Impressum() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-4">
          PrintPro GmbH<br />
          Musterstraße 123<br />
          12345 Musterstadt
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Vertreten durch</h2>
        <p className="mb-4">Max Mustermann, Geschäftsführer</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Kontakt</h2>
        <p className="mb-4">
          Telefon: +49 (0) 123 456789<br />
          E-Mail: info@printpro.de
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Registereintrag</h2>
        <p className="mb-4">
          Eintragung im Handelsregister<br />
          Registergericht: Amtsgericht Musterstadt<br />
          Registernummer: HRB 12345
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Umsatzsteuer-ID</h2>
        <p className="mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE 123456789
        </p>
      </div>
    </div>
  );
}