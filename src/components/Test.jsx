import './Test.css';

export default function Test({ message }) {	
	return (
		<p className="test">{message}</p>
	);
}

Test.config = {
	name: 'Test Component',
	inputs: [
		{
		  name: 'message',
		  type: 'text',
		  defaultValue: 'hello test'
		},
	  ]
  };
