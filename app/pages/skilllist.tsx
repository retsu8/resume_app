export default function SkillList({data}) {
  let results = [];
  data.forEach((item, index) => {
    results.push(<li key={item.type}><b>{item.type}</b> - {item.value}</li>)
    })
  return (<ul>{results}</ul>);
}