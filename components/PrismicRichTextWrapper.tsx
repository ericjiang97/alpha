import React from 'react';

import { RichText as CustomRichText } from 'prismic-reactjs-custom';
import { PrismicRichText } from 'prismic-reactjs-custom/dist/es/RichText.model';
import Heading from './core/Heading';

interface PrismicRichTextWrapperProps {
  richText: PrismicRichText;
}

const PrismicRichTextWrapper: React.FC<PrismicRichTextWrapperProps> = ({ richText }) => {
  return (
    <>
      <CustomRichText
        richText={richText}
        paragraph={(props: any) => {
          return <p className="my-2">{props.children}</p>;
        }}
        heading1={(props: any) => {
          return (
            <Heading use="h2" className="my-4">
              {props.children}
            </Heading>
          );
        }}
        heading2={(props: any) => {
          return (
            <Heading use="h3" className="my-4">
              {props.children}
            </Heading>
          );
        }}
        heading3={(props: any) => {
          return (
            <Heading use="h4" className="my-4">
              {props.children}
            </Heading>
          );
        }}
        heading4={(props: any) => {
          return (
            <Heading use="h5" className="my-4">
              {props.children}
            </Heading>
          );
        }}
        image={(props: any) => {
          return <img src={props.src} alt={props.alt} className="self-center" {...props} />;
        }}
        hyperlink={(props: any) => {
          return <a className="text-indigo-500 font-semibold" {...props} />;
        }}
        preformatted={(props: any) => {
          return (
            <pre
              style={{
                maxWidth: '80vw',
                overflowY: 'scroll',
              }}
            >
              {props.children}
            </pre>
          );
        }}
      />
    </>
  );
};

export default PrismicRichTextWrapper;
