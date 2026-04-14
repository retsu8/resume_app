export default function WorkList({data}: dict) {
	let results = [];
	data.forEach((item, index) => {
	    results.push(
	      <li key={index}>{item}</li>
	    );
	  });
  return <ul style={{"list-style-type": "disc"}}>{results}</ul>;
}
