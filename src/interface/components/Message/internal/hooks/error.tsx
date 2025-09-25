import * as Types from '../types';

import { IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

import cx from 'clsx';
import styles from '../../Notification.module.scss';

function error(arg: Types.IUse.SingleProps | Types.IUse.INotification) {
  const values: Types.IUse.INotification = typeof arg === 'string' ? { message: arg } : arg;

  return notifications.show({
    id: values.id,
    title: values.title,
    message: values.message,
    position: values.position || 'top-center',
    autoClose: values.autoClose || 2000,
    icon: <IconX className={styles.notify_icon} />,
    withCloseButton: values.withCloseButton ?? false,
    classNames: {
      title: styles.notify_title,
      icon: styles.notify_icon_wrapper,
      description: styles.notify_description,
      root: cx(styles.notify_root, styles.error_root)
    }
  });
}

export default error;
