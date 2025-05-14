import { useRecoilState } from 'recoil';
import selectedPerson from '../recoil/atoms/selectedPerson';

function SelectedPerson() {
	const [personSelected] = useRecoilState(selectedPerson);
	return (
		<div style={{ marginTop: '2rem' }}>
			Pessoa selecionada:
			{personSelected.id !== -1 && (
				<>
					<p>ID: {personSelected.id}</p>
					<p>Nome: {personSelected.name}</p>
					<p>Idade: {personSelected.age}</p>
					<p>Email: {personSelected.email}</p>
				</>
			)}
		</div>
	);
}

export default SelectedPerson;
