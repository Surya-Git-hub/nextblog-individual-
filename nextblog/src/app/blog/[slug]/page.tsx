import React from "react";

const blog = ({ params }: { params: { slug: string} }) => {
  return <div>blog page {params.slug[0]} </div>;
};

export default blog;
