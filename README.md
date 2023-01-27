# 🔔 Notifications Service

This is a project built during an online event. It's a NestJS API that follows SOLID principles, such as dependency inversion and injection and single responsibility. Additionally, the API was developed using TDD (Test Driven Development) and In Memory Database principles. 

### ⚙️ Techs used

- NodeJS (with NestJS)
- TypeScript (for full integration with NestJS features, such as its decorators)
- Prisma (to write simple but efficient queries to the database)
- Jest (since it's the default framework for tests with NestJS)

### 👤 Database entities

<pre>Notification {
  id: string;
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date;
  canceledAt?: Date;
  createdAt: Date;
}</pre>

### 🎯 Use cases

- **Cancel** Notification 
- **Count** Notifications from a single recipient
- **Get** Notifications from a single recipient
- **Read** a Notification
- **Send** a Notification
- **Unread** a Notification
