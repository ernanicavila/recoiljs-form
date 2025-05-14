import { useRecoilState, useRecoilValue } from 'recoil';
import deletePerson from '../recoil/selectors/deletePerson';
import persons from '../recoil/atoms/persons';
import selectedPerson from '../recoil/atoms/selectedPerson';
import IPerson from '../recoil/atoms/interface/IPerson';

function PersonList() {
	const delPerson = useRecoilValue(deletePerson);
	const [person, setPerson] = useRecoilState(persons);
	const [personSelected, setPersonSelected] = useRecoilState(selectedPerson);

	const handleDelete = (el: IPerson) => {
		setPersonSelected(el);
		setPerson(delPerson);
		setPersonSelected({
			id: -1,
			name: '',
			age: -1,
			email: '',
		});
	};
	return (
		<>
			{person.map((el) => (
				<div
					key={el.id}
					style={{
						border:
							personSelected.id === el.id ? '1px solid yellow' : '1px solid red',
						width: '300px',
						display: 'inline-flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '24px',
						padding: '16px',
					}}
				>
					<p>ID: {el.id}</p>
					<p>Name: {el.name}</p>
					<p>Age: {el.age}</p>
					<p>Email: {el.email}</p>
					<div
						style={{
							width: '60%',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<button onClick={() => setPersonSelected(el)}>Select</button>
						<button onClick={() => handleDelete(el)}>Delete Selected</button>
					</div>
				</div>
			))}
		</>
	);
}

export default PersonList;
