import './App.css';
import './style/index.css';
import { Route } from 'react-router-dom';
import { Breadcrumb } from './components/Breadcrumb';
import { Navbar } from './components/Navbar';
import { PostItem } from './components/PostItem';
import { Posts } from './components/Posts';
import { Main } from './components/Main';

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Main} />
      <Route exact path={['/posts/', '/posts/:id']} component={Breadcrumb} />
      <Route exact path="/posts/" component={Posts} />
      <Route exact path="/posts/:id" component={PostItem} />
    </div>
  );
}
