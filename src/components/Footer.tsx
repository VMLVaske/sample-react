import React from 'react';
import { Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Printer className="h-8 w-8 text-blue-400" />
          <span className="ml-2 text-xl font-bold">PrintPro</span>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/impressum" className="text-gray-400 hover:text-white">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-gray-400 hover:text-white">
            Datenschutzerklärung
          </Link>
        </div>
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} PrintPro. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}