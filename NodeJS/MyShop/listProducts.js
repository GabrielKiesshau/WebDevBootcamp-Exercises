const faker = require('faker/locale/en_US');

faker.seed(123);

for (let index = 0; index < 10; index++) {
    console.log(faker.commerce.productName() +' - $'+ faker.commerce.price());
}
