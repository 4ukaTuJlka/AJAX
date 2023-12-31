const parser = new DOMParser();

const xmlString = '
    < list >
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list >
';

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list")
const studentNode = studentNode.querySelector("student");
const secondNode = studentNode.querySelector("name");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');

const result = {
    lang: langAttr,
    name: nameNode.secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
 
};
console.log('result', result);









