import {dataType} from "../../types";

export default function SkillList({data}: any) {
  return (<ul>{
    data.forEach((item: dataType, index: number) => {
        return(<li key={item.type}><b>{item.type}</b> - {item.value}</li>)
        })}</ul>);
}