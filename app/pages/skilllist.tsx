import {dataType} from "../../types";

export default function SkillList({data}: any) {
  return (
    <ul>
      {data.map((item: dataType, index: number) => {
        return(
            <li key={index}><b>{item.type}</b> - {item.value}</li>)
        })
    }</ul>);
}