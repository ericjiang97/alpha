import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

import { Modal, Button, Card, Heading, Container, Icon, Group, Input } from 'bumbag';

interface SharePostModal {
  slug: string;
  title: string;
}

const ShareModal: React.FC<SharePostModal> = ({ slug, title }) => {
  const modal = Modal.useState();

  const postUrl = `https://ericjiang.dev/blog/${slug}`;

  return (
    <>
      <Modal.Disclosure use={Button} {...modal}>
        <Icon aria-label="Share article" icon="solid-share" marginRight="0.5rem" />
        Share Post
      </Modal.Disclosure>
      <Modal {...modal}>
        <Card>
          <Container>
            <Heading use="h4" textAlign="center">
              Share Article
            </Heading>
            <Heading use="h5" textAlign="center">
              {title}
            </Heading>
            <Container display="flex" alignItems="center" justifyContent="space-evenly">
              <EmailShareButton url={postUrl}>
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
              <TwitterShareButton url={postUrl} title={`${title} by Eric Jiang!`}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <LinkedinShareButton url={postUrl} title={`${title} by Eric Jiang!`} source={'https://ericjiang.dev'}>
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
              <FacebookShareButton url={postUrl}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
            </Container>
            <Container>
              <Group>
                <Input width="100%" disabled defaultValue={postUrl} />
                <CopyToClipboard text={postUrl}>
                  <Button palette="primary">
                    <Icon aria-label="Copy to Clipboard" icon="solid-copy" />
                  </Button>
                </CopyToClipboard>
              </Group>
            </Container>
          </Container>
        </Card>
      </Modal>
    </>
  );
};

export default ShareModal;
