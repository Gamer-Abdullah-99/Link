import React from "react";

const allStudents = {
  2643: {
    name: "haider",
    rollNum: 2643,
    subject: "JavaScript",
  },
  2644: {
    name: "abdullah",
    rollNum: 2644,
    subject: "React",
  },
  2645: {
    name: "muzammil",
    rollNum: 2645,
    subject: "HTML",
  },
  2646: {
    name: "ahmed",
    rollNum: 2646,
    subject: "CSS",
  },
};

export default function Students() {
  return Object.keys(allStudents).map((keys, index) => {
    console.log(allStudents[keys]);
  });
}
