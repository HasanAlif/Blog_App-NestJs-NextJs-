/* eslint-disable prettier/prettier */
import { faker } from '@faker-js/faker';
import { PrismaClient } from '../generated/prisma'; // Correct import path for PrismaClient

const prisma = new PrismaClient(); // Initialize Prisma Client

function generateSlug(title: string): string { // Function to generate a slug from a title
  return title
    .toLowerCase()
    .trim()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, ''); // Replace spaces with hyphens and remove non-word characters
}

async function main() {// Main function to seed the database
  const users = Array.from({ length: 10 }).map(() => ({ // Generate an array of user objects
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  })); // Create 10 users with random data

  await prisma.user.createMany({ data: users }); // Insert users into the database

  const posts = Array.from({ length: 40 }).map(() => ({ // Generate an array of post objects
    title: faker.lorem.sentence(),
    slug: generateSlug(faker.lorem.sentence()),
    content: faker.lorem.paragraphs(3),
    thumbnail: faker.image.urlLoremFlickr(),
    authorId: faker.number.int({ min: 1, max: 10 }),
    published: true,
  })); // Create 40 posts with random data

  await Promise.all( // Insert posts into the database
    posts.map( // Map over each post to create it in the database
      // Create each post with associated comments
      async (post) =>
        await prisma.post.create({
          data: {
            ...post,
            comments: {
              createMany: {
                data: Array.from({ length: 20 }).map(() => ({
                  content: faker.lorem.sentence(),
                  authorId: faker.number.int({ min: 1, max: 10 }),
                })), // Create 20 comments for each post
              }, // Use createMany to insert multiple comments at once
            }, // Associate comments with the post
          }, // Create the post with comments
        }), // Use Promise.all to ensure all posts are created before proceeding
    ), // Wait for all posts to be created
  ); // Insert posts into the database

  console.log(`Seeded ${users.length} users and ${posts.length} posts with comments.`); // Log the number of seeded users and posts
}

main() // Call the main function to start seeding
  .then(async () => {
    await prisma.$disconnect(); // Disconnect Prisma Client after seeding
    process.exit(0);
  })
  .catch(async (error) => {
    console.error('Error during seeding:', error);
    await prisma.$disconnect();
    process.exit(1);
  }); // Handle any errors during seeding and ensure Prisma Client is disconnected
// This script seeds the database with random users, posts, and comments using Prisma Client and Faker
