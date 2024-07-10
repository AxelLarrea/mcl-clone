import { Route } from 'wouter';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import ItemList from './pages/ItemList';
import '../styles.css';

const App = () => {
    return (
        <>
            <Route path="/" component={Home}/>
            <Route path="/detail" component={ItemDetail}/>
            <Route path="/items" component={ItemList}/>
        </>
    );
}
 
export default App;
