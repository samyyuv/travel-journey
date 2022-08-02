import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data'


function App() {
  const dailyData = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item} />
    )
  })
  return (
    <div>
      <Header />
      <section>
        {dailyData}
      </section>
    </div>

  );
}

export default App;
