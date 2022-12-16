import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>; // every property from NotificationProps is now optional

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New invite!'),
    recipientId: 'example-recipientId',
    ...override,
  });
}
