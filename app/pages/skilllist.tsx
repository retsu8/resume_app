export interface Skill {
  type: string
  value: string
}

interface SkillList {
  [results]: string
}

export default function SkillList({data}: any) {
  let results = [];
  data.forEach((item, index) => {
    results.push(<li key={item.type}><b>{item.type}</b> - {item.value}</li>)
    })
  return (<ul>{results}</ul>);
}