# 🔔 Notifications Service

## ✨ What I Learned

- How to apply SOLID principles to an API
  - Using NestJS, which is an opinionated Node framework that provides integration with SOLID architecture
- The concept of a repository, which is the layer that exclusively communicates with the database
- How to develop an in-memory database and factory pattern to write unit tests

## 🔭 Overview

This is a project built during an online event. It's a NestJS API that follows SOLID principles, such as dependency inversion and injection and single responsibility. Additionally, the API was developed using TDD (Test Driven Development) and In Memory Database principles.

## ⚙️ Techs used

- NodeJS (with NestJS)
- TypeScript
- Prisma
- Jest

## 👤 Database entities

<pre>Notification {
  id: string;
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date;
  canceledAt?: Date;
  createdAt: Date;
}</pre>

## 🎯 Use cases

- **Cancel** Notification
- **Count** Notifications from a single recipient
- **Get** Notifications from a single recipient
- **Read** a Notification
- **Send** a Notification
- **Unread** a Notification
