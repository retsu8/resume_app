import ThemeProvider from 'react-bootstrap/ThemeProvider';

export default function WorkList({data}: any) {
	return(
		<ul className="list-group-numbered">{
				data.map((item: string, index: number) => {
				    return(
				      <li className="list-group-item d-flex align-items-start" key={index}>{item}</li>
				    );
				  })
			}</ul>);
}
