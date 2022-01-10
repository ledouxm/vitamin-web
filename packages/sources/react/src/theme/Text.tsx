import { Box, BoxProps } from './Box';
import cx from 'clsx';
import { WithChildren, WithClassName } from '../typings';

export const Text = ({
  kind,
  className,
  ...props
}: WithChildren &
  WithClassName & { kind: keyof typeof variants } & BoxProps) => {
  return <Box as="span" {...props} className={cx(className, variants[kind])} />;
};

// https://github.com/Decathlon/vitamin-web/blob/be5f39296d/packages/sources/css/src/utilities/src/typography.css
const variants = {
  'display-1': 'vtmn-typo_display-1',
  'display-2': 'vtmn-typo_display-2',
  'title-1': 'vtmn-typo_title-1',
  'title-2': 'vtmn-typo_title-2',
  'title-3': 'vtmn-typo_title-3',
  'title-4': 'vtmn-typo_title-4',
  'title-5': 'vtmn-typo_title-5',
  'text-1': 'vtmn-typo_text-1',
  'text-2': 'vtmn-typo_text-2',
  'text-3': 'vtmn-typo_text-3',
};
