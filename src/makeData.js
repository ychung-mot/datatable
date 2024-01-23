import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName:
      namor.generate({ words: 1, numbers: 0 }) +
      namor.generate({ words: 1, numbers: 0 }),
    lastName:
      namor.generate({ words: 1, numbers: 0 }) +
      namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 300000),
    visits: Math.floor(Math.random() * 1000000),
    progress: Math.floor(Math.random() * 1000000),
    status1:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status2:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status3:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status4:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status5:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status6:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status7:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status8:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status9:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
    status10:
      statusChance > 0.66
        ? Array(10).fill("relationship").join("")
        : statusChance > 0.33
        ? Array(10).fill("complicated").join("")
        : Array(10).fill("single").join(""),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
