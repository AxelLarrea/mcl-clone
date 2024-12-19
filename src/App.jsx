import { Route } from 'wouter';
import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';
import './styles/styles.css';

const App = () => {
    return (
        <>
            <Route path="/" component={Home}/>
            <Route path="/product" component={Product}/>
            <Route path="/search/:id" component={Search}/>
        </>
    );
}
 
export default App;
