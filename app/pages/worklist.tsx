const results = [];

function parseData(pointData){
	pointData.forEach((item, index) => {
	    results.push(
	      <li key={index}>{item}</li>
	    );
	  });
}

export default function WorkList(data) {
  return <ul style={{"list-style-type": "disc"}}>{results}</ul>;
}