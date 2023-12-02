
import { AppRouter } from "@app/router/AppRouter";
import { Container } from "@chakra-ui/react";
import { Navbar } from "@components/Navbar";


function App() {


  return (
	<Container padding={'10px'} backgroundColor={'#F6F8FA'}>
		<Navbar/>
		<AppRouter/>
	</Container>
  )
}

export default App;
