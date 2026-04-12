const results = [];

function parseSkills(dataPoint){
  dataPoint.forEach((item, index) => {
    results.push(
      <li key={index}><b>{item.type}</b> - {item.value}</li>
    );
  });
}

export default function SkillList(data) {
  parseSkills(data)
  return <ul>{results}</ul>;
}