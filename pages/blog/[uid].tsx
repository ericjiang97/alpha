import React from 'react';
import moment from 'moment';

import { RichText } from 'prismic-reactjs';
import { RichText as CustomRichText } from 'prismic-reactjs-custom';
import { Container, Heading, Icon, Image, Label, Link, Paragraph } from 'bumbag';

import HeroBase from '../../components/core/HeroBase';
import ShareModal from '../../components/modals/ShareModal';
import PageLayout from '../../containers/layouts/PageLayout';

import { client } from '../../config/prismic';

export default function Post({ data, uid }: { data: any; uid: string }) {
  const { title, author, preview, published_time } = data;
  return (
    <PageLayout
      title={`Blog - ${RichText.asText(title)}`}
      ignoreHorizontalPadding={true}
      banner={
        <>
          {preview && (
            <Container
              backgroundColor="primary"
              color="white"
              width="100vw"
              maxWidth="100vw"
              paddingX="1rem"
              paddingY="1.5rem"
              display="flex"
              alignItems="center"
            >
              <Icon icon="solid-info-circle" marginRight="1.5rem" />
              <Paragraph marginTop="0">
                This is a <strong>preview</strong> article used for testing and sharing purposes, please DO NOT share
                this article until it has been published.
              </Paragraph>
            </Container>
          )}
          <HeroBase backgroundImage={`url('${data.banner.url}')`}>
            <Heading use="h3">{RichText.asText(title)}</Heading>
            <Container marginY="1rem"></Container>
            <Container marginY="1rem">
              <Label>By</Label>
              <Paragraph>{RichText.asText(author)}</Paragraph>
              <Label>Published on</Label>
              <Paragraph>{moment(published_time).format('ddd Do MMM YYYY')}</Paragraph>
            </Container>
          </HeroBase>
        </>
      }
      pageMeta={{
        endpoint: `/blog/${uid}`,
      }}
    >
      <Container maxWidth="100%">
        <CustomRichText
          richText={data.body}
          paragraph={(props: any) => {
            return <Paragraph marginY="1.25rem" {...props} />;
          }}
          image={(props: any) => {
            return <Image width="100%" {...props} />;
          }}
          hyperlink={(props: any) => {
            return <Link {...props} />;
          }}
        />
      </Container>
      <Container marginY="1rem" display="flex" flexWrap="wrap" justifyContent="space-between">
        <ShareModal title={RichText.asText(title)} slug={`/blog/${uid}`} />
      </Container>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }: { params: { uid: string } }) {
  const { uid } = params;
  const { data } = await client.getByUID('blog-post', uid, {});
  return {
    props: { data, uid },
  };
}
