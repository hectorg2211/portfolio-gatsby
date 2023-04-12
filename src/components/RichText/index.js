import { PortableText } from "@portabletext/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import React from "react";

const myPortableTextComponents = {
  types: {
    image: ({ node }) => {
      const imageData = getGatsbyImageData(
        node.asset._ref,
        { placeholder: "blurred" },
        { dataset: `${process.env.GATSBY_SANITY_DATASET}`, projectId: `${process.env.GATSBY_SANITY_PROJECT_ID}` }
      );
      return <GatsbyImage image={imageData} alt='' />;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong className='font-semibold'>{children}</strong>,
  },
  block: {
    style: 'normal',
    h1: ({ children }) => <h1 className='text-3xl sm:text-5xl font-semibold text-dark pb-5 pt-2'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-2xl sm:text-4xl font-semibold text-dark pb-5 pt-2'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-xl sm:text-3xl font-semibold text-dark pb-5 pt-2'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-lg sm:text-2xl font-semibold text-red pb-5 pt-2'>{children}</h4>,
    h5: ({ children }) => <h5 className='text-base sm:text-xl font-semibold text-dark pb-5 pt-2'>{children}</h5>,
    h6: ({ children }) => <h6 className='text-sm sm:text-lg font-semibold text-dark pb-5 pt-2'>{children}</h6>,
    normal: ({ children }) => <p className='text-base sm:text-lg text-dark pb-3'>{children}</p>,
  },
  list: {
    style: 'normal',
    bullet: ({ children }) => <ul className='list-disc list-inside'>{children}</ul>,
    number: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,
  },
  listItem: {
    style: 'normal',
    bullet: ({ children }) => <li className='text-base sm:text-lg text-dark pb-3'>{children}</li>,
    number: ({ children }) => <li className='text-base sm:text-lg text-dark pb-3'>{children}</li>,
  },
};

const RichText = ({ blockContent }) => {
  return (
    <div>
      <PortableText
        value={blockContent}
        components={myPortableTextComponents}
      />
    </div>
  );
};

// const Image = ({ value }) => {
//   const imageData = getGatsbyImageData(
//     value.asset._ref,
//     { placeholder: "blurred" },
//     { dataset: `${process.env.GATSBY_SANITY_DATASET}`, projectId: `${process.env.GATSBY_SANITY_PROJECT_ID}` }
//   );
//   return <GatsbyImage image={imageData} alt='' />;
// };

export default RichText;
