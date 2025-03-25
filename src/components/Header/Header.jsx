import "./Header.css";
function Header({ title }) {
  return (
    <header className="pages-header">
      <div className="container">
        <h2 className="pages-title">{title}</h2>
      </div>
    </header>
  );
}

export default Header;
