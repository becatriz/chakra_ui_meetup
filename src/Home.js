import { Header } from './components/Header';
import { Menu } from './components/Menu';

function Home() {
  return (
    <Header>
      <Menu>
        <ul>
          <li>A</li>
          <li>B</li>
        </ul>
      </Menu>
    </Header>
  );
}

export default Home;
