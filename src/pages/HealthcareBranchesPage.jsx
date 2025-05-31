import React from "react";
import { Card, CardContent } from "../components/ui/card";

const medicalFields = [
  {
    name: "MBBS",
    description: "Bachelor of Medicine, Bachelor of Surgery. A 5.5-year program including internship. Graduates become general physicians or pursue specialization.",
    icon: "🩺"
  },
  {
    name: "BDS",
    description: "Bachelor of Dental Surgery. A 5-year program focused on dental sciences. Graduates become dentists or specialize in oral surgery, orthodontics, etc.",
    icon: "🦷"
  },
  {
    name: "BAMS",
    description: "Bachelor of Ayurvedic Medicine and Surgery. A 5.5-year program on Ayurvedic principles with clinical training. Graduates practice Ayurvedic medicine.",
    icon: "🌿"
  },
  {
    name: "BHMS",
    description: "Bachelor of Homeopathic Medicine and Surgery. A 5.5-year course teaching homeopathy practices. Graduates treat patients using homeopathic remedies.",
    icon: "💊"
  },
  {
    name: "BPT",
    description: "Bachelor of Physiotherapy. A 4.5-year program focusing on physical rehabilitation and exercise therapy. Graduates work in hospitals, rehab centers, or independently.",
    icon: "🧘"
  },
  {
    name: "Pharmacy",
    description: "Bachelor of Pharmacy. A 4-year course on pharmaceutical sciences, drug formulation, and clinical practices. Graduates work in pharma companies, hospitals, or research.",
    icon: "💉"
  }
];

export default function HealthcareBranchesPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-green-700">
        Explore Medical Fields
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {medicalFields.map((field, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex items-start space-x-4">
              <div className="text-3xl pt-1">{field.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-green-700">
                  {field.name}
                </h2>
                <p className="text-sm text-gray-600">{field.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
