const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
const listProducts = products.map(
    product => <li key={product.id}>{product.title}</li>
)
function App() {
    return (
        <ul>
            {listProducts}
        </ul>
    )
}
export default App;