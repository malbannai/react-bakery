import logo from "./logo.svg";
import "./App.css";
import newReleases from "./newReleases";

function App() {
  const releases = newReleases.map((element) => (
    <div style={styles.card}>
      <img src={element.image} style={styles.cardImage} />
      <h3 style={styles.text}>{element.name}</h3>
      <p style={styles.text}>{element.price} KD</p>
    </div>
  ));
  return (
    <div className="App">
      <h1 style={styles.title}>Codeds Bakery</h1>
      <h3 style={styles.subTitle}>A place were your Brain can Refresh</h3>
      <img
        style={styles.mainImage}
        src="https://thumbs.dreamstime.com/b/bakery-shop-building-facade-signboard-baking-store-cafe-bread-pastry-dessert-shop-showcases-various-bread-cakes-159414926.jpg"
      />
      <h3 style={styles.subTitle}>New Releases</h3>
      <div style={styles.cardList}>{releases}</div>
    </div>
  );
}

const styles = {
  title: {
    textAlign: "center",
    fontFamily: "Lucida Console",
    color: "Red",
  },
  subTitle: {
    textAlign: "center",
    fontFamily: "Lucida Console",
    color: "Orange",
  },
  mainImage: {
    width: "40%",
  },
  cardList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: "5px",
  },
  text: {
    textAlign: "center",
    fontFamily: "Lucida Console",
  },
  cardImage: {
    hight: "150px",
    width: "150px",
  },
};

export default App;
