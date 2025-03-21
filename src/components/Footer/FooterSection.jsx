import React from "react";

function FooterSection({ title, content }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 whitespace-pre-line">{content}</p>
    </div>
  );
}

export default FooterSection;
