import ShortUniqueId from 'short-unique-id';

const suid = new ShortUniqueId({length: 3});

console.log(suid.rnd());
