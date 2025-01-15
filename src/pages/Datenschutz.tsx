import React from 'react';

export default function Datenschutz() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Datenschutz auf einen Blick</h2>
        <p className="mb-4">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">2. Datenerfassung auf unserer Website</h2>
        <h3 className="text-lg font-medium mt-4 mb-2">Cookies</h3>
        <p className="mb-4">
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">Server-Log-Dateien</h3>
        <p className="mb-4">
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">3. Kontaktformular</h2>
        <p className="mb-4">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>
      </div>
    </div>
  );
}