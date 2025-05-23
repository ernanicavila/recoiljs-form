import { useState } from 'react';
import persons from '../recoil/atoms/persons';
import { useRecoilState } from 'recoil';

function PersonForm() {
  const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
  const [person, setPerson] = useRecoilState(persons);

	const handleSubmit = () => {
		const payload = {
			id: person.length + 1,
			name,
			age: parseInt(age),
			email,
		};
		setPerson([...person, payload]);

		setName('');
		setAge('');
		setEmail('');
	};

	return (
		<>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Name'
			/>
			<input
				type="number"
				value={age}
				onChange={(e) => setAge(e.target.value)}
				placeholder='Age'
			/>
			<input
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Email'
			/>
			<button onClick={handleSubmit}>Submit</button>
		</>
	);
}

export default PersonForm;
