import cx from 'clsx';
import React from 'react';
import { BoxProps, Box } from '../../theme/Box';
import { WithChildren, WithClassName } from '../../typings';

export type VtmnTagVariant = keyof typeof variants;
export type VtmnTagProps = WithChildren &
  WithClassName & { kind: VtmnTagVariant } & BoxProps;

// https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-tag--overview
export const VtmnTag = ({ kind, className, ...props }: VtmnTagProps) => {
  return (
    <Box
      as="span"
      {...props}
      className={cx('vtmn-tag', className, variants[kind])}
    />
  );
};

const variants = {
  accent: 'vtmn-tag_variant--accent',
  alert: 'vtmn-tag_variant--alert',
  brand: 'vtmn-tag_variant--brand',
  decorative_gravel: 'vtmn-tag_variant--decorative_gravel',
  decorative_brick: 'vtmn-tag_variant--decorative_brick',
  decorative_saffron: 'vtmn-tag_variant--decorative_saffron',
  decorative_gold: 'vtmn-tag_variant--decorative_gold',
  decorative_jade: 'vtmn-tag_variant--decorative_jade',
  decorative_emerald: 'vtmn-tag_variant--decorative_emerald',
  decorative_cobalt: 'vtmn-tag_variant--decorative_cobalt',
  decorative_amethyst: 'vtmn-tag_variant--decorative_amethyst',
};

const MemoVtmnTag = React.memo(VtmnTag);

MemoVtmnTag.displayName = 'VtmnTag';

export default MemoVtmnTag;
