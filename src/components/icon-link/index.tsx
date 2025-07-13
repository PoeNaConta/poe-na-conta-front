import IconButton from '@components/icon-button';
import { IconHTMLAnchorProps } from '@components/icon-button/types';
import { createLink } from '@tanstack/react-router';
import { ComponentProps } from 'react';

function IconLinkTemplate(props: Omit<IconHTMLAnchorProps, 'link'>) {
  return <IconButton {...props} link />;
}

const TanstackIconLink = createLink(IconLinkTemplate);

export default function IconLink(
  props: ComponentProps<typeof TanstackIconLink>,
) {
  return (
    <TanstackIconLink
      activeProps={{ active: true }}
      preload="intent"
      {...props}
    />
  );
}
