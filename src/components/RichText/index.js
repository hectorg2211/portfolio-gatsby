import { PortableText } from "@portabletext/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import React from "react";

const GATSBY_SANITY_PROJECT_ID = "kc8fuu63";
const GATSBY_SANITY_DATASET = "production";

const RichText = ({ blockContent }) => {
  return (
    <div>
      <PortableText
        value={blockContent}
        components={{ types: { image: Image } }}
      />
    </div>
  );
};

const Image = ({ value }) => {
  const imageData = getGatsbyImageData(
    value.asset._ref,
    { placeholder: "blurred" },
    { dataset: GATSBY_SANITY_DATASET, projectId: GATSBY_SANITY_PROJECT_ID }
  );
  return <GatsbyImage image={imageData} alt='' />;
};

export default RichText;
