const student = {
  name: "vyankatesh",
  rollNo: 122,
  address: "India",
};

for (const key in student) {
  console.log(`student info are ${key} = ${student[key]}`);
}
