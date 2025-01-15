import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  preDescription: string;
  bulletPoints: string[];
  postDescription: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, subtitle, preDescription, bulletPoints, postDescription, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="container-width">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-blue-600 font-medium">{subtitle}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{preDescription}</p>

        <ul className="space-y-2 text-gray-600 list-inside flex-grow">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 mb-4">{postDescription}</p>

      </div>
    </div>
  );
}