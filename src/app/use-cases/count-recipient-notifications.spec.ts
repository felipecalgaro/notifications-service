import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipientId-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipientId-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipientId-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipientId-1',
    });

    expect(count).toEqual(2);
  });
});
