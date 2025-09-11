import { Button as MantineButton } from '@mantine/core';

import * as Types from './internal/types';

// styles
import cx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({
  children,
  className,
  color,
  full,
  htmlType,
  size = 'md',
  variant = 'filled',
  ...props
}: Types.IBase.IProps) => (
  <MantineButton
    size={size}
    type={htmlType}
    variant={variant}
    data-fullwidth={full && full.toString()}
    className={cx(styles.button, color && styles[color], className)}
    {...props}
  >
    {children}
  </MantineButton>
);

export default Button;
