let people = [{
    name: '유재석',
    point: 78,
    city: '서울'
  },
  {
    name: '박명수',
    point: 72,
    city: '부산'
  },
  {
    name: '정준하',
    point: 75,
    city: '대구'
  },
  {
    name: '정형돈',
    point: 76,
    city: '울산'
  }
]

let filter = people.filter((person) => person.point >= 75);
console.log(filter);

filter[0].name = "노홍철";
console.log(filter);
console.log(people);

let map = people.map((person, index) => {
  person.no = index;
  return person;
});
console.log(map);

map[0].name = '하하';
console.log(map);
console.log(people)

map = people.map((person, index) => {
  return  {
    no : index + 1,
    name: person.name,
    point: person.point,
  };
});
console.log(map);

map[0].name = '길';
console.log(map);
console.log(people)