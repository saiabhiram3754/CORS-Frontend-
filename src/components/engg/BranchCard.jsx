import React from "react";
// import PropTypes from "prop-types";
import { Card, CardContent } from "../ui/card";

export default function BranchCard({ branch }) {
  return (
    <Card className="overflow-hidden">
      <img
        src={branch.image}
        alt={branch.name}
        className="w-full h-40 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{branch.name}</h3>
        <p className="text-gray-600 mt-2">{branch.description}</p>
      </CardContent>
    </Card>
  );
}

// BranchCard.propTypes = {
//   branch: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };
