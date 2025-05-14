import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import SelectedPerson from './components/SelectedPerson';

function App() {
	return (
		<>
			<PersonForm />
			<SelectedPerson />
			<PersonList />
		</>
	);
}

export default App;
