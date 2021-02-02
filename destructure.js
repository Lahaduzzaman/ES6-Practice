const person = { name: 'Zuker', age: 47, job: 'facebooker', gfName: 'Ema Watson', address: 'Dhanmoondi', phone: '0179866511', friends: ['Bad Prit', 'Will', 'Smith'] }

const { address, phone, gfName, salary } = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Salman Khan', 'Noazuddin', 'Aamir Khan', 'Rajkumar', 'Ayeusman'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF)