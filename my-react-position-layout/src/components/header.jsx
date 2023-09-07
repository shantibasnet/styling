import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR054mlSgWywLX1BtVyCbVcdugAtfsF7rsoBQ&usqp=CAU"
        alt="Description of the image"
      />

      <h1 className="h1">MOON CAFE</h1>
    </header>
  );
}

export default Header;
