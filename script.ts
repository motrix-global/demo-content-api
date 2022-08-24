import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Motrix Test",
  //     email: "test@motrix.global",
  //   },
  // });
  // console.log(user);

  //   const users = await prisma.user.findMany();
  //   console.log(users);

  const user = await prisma.user.create({
    data: {
      name: "Motrix Test 2",
      email: "test2@motrix.global",
      content: {
        create: {
          title: "Hello World",
        },
      },
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
