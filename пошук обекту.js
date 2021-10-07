function findUsersByName(users, name) {
  let value = [];
  for (let i of users) {
    let key = Object.values(name.split(' '));
    // console.log(key);
    if (key.includes(i.name)) {
      value.push(i);
    }
  }
  return value;
}

function findUsersByString(users, str) {
  let value = [];
  for (let i of users) {
    let x = i.name.toLowerCase();
    if (x.includes(str)) {
      value.push(i);
    }
  }
  return value;
}

const users = [
  {
    id: 101,
    name: 'Denis',
    city: 'Kyiv',
  },
  {
    id: 102,
    name: 'Alexandr',
    city: 'Lviv',
  },
  {
    id: 103,
    name: 'Nastya',
    city: 'Kyiv',
  },
  {
    id: 104,
    name: 'Violetta',
    city: 'Odesa',
  },
  {
    id: 105,
    name: 'Mykola',
    city: 'Lviv',
  },
  {
    id: 106,
    name: 'Denis',
    city: 'Lviv',
  },
  {
    id: 107,
    name: 'Andrey',
    city: 'Odesa',
  },
  {
    id: 108,
    name: 'Alexey',
    city: 'Dnipro',
  },
];

findUsersByName(users, 'Denis'); // ===> [ { id: 101, name: 'Denis', city: 'Kyiv' }, { id: 106, name: 'Denis', city: 'Lviv' } ]
findUsersByName(users, 'Andrey'); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
findUsersByName(users, 'Anna'); // ===> [ ]

findUsersByString(users, 'Al'); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
findUsersByString(users, 't'); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
findUsersByString(users, 'Vik'); // ===> [ ]

findUsersByString(users, 'm'); // ===> [ ]
// explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result
