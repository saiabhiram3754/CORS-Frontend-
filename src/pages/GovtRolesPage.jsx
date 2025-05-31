import React from "react";
import { Card, CardContent } from "../components/ui/card";

const governmentRoles = [
  {
    name: "UPSC (IAS/IPS/IFS)",
    description:
      "Conducted by Union Public Service Commission for top administrative roles like IAS, IPS, IFS. Requires clearing Civil Services Exam.",
    icon: "🏛️"
  },
  {
    name: "SSC (CGL, CHSL)",
    description:
      "Staff Selection Commission conducts exams for various central government ministries and departments such as CGL (Group B & C) and CHSL.",
    icon: "📋"
  },
  {
    name: "Banking",
    description:
      "Roles in RBI, SBI, and IBPS banks including PO, Clerk, SO. Requires clearing banking exams.",
    icon: "🏦"
  },
  {
    name: "Railways",
    description:
      "Indian Railways offers jobs through RRB NTPC, JE, ALP, and Group D exams. Covers both technical and non-technical posts.",
    icon: "🚆"
  },
  {
    name: "Teaching",
    description:
      "Government teaching jobs through exams like CTET, TET, and UGC-NET for schools and colleges.",
    icon: "📚"
  },
  {
    name: "Defence",
    description:
      "Includes NDA, CDS, AFCAT for Army, Navy, Air Force. SSB interviews and physical tests are part of the process.",
    icon: "🪖"
  }
];

export default function GovtRolesPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-yellow-700">
        Explore Government Career Roles
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {governmentRoles.map((role, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex items-start space-x-4">
              <div className="text-3xl pt-1">{role.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-700">
                  {role.name}
                </h2>
                <p className="text-sm text-gray-600">{role.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
