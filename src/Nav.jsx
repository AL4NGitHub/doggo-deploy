import "./Nav.css";

let id = 0;

function changeMode() {
  if (id == 0) {
    document.documentElement.style.setProperty("--bg", "#ffffff");
    document.documentElement.style.setProperty("--font", "#121212");
    document.documentElement.style.setProperty("--dark-element", "#eee");
    document.documentElement.style.setProperty("--light-element", "#1e1e1e");
    document.documentElement.style.setProperty(
      "--shadow",
      "rgba(7, 6, 6, 0.05)"
    );
    id++;
  } else if (id == 1) {
    document.documentElement.style.setProperty("--bg", "#121212");
    document.documentElement.style.setProperty("--font", "#ffffff");
    document.documentElement.style.setProperty("--dark-element", "#1e1e1e");
    document.documentElement.style.setProperty("--light-element", "#eee");
    document.documentElement.style.setProperty(
      "--shadow",
      "rgba(7, 6, 6, 0.2)"
    );
    id--;
  }
}

export function Nav() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <div className="links">
          <a href="../index.html">Home</a>
          <a href="#">Our Services</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <span class="material-symbols-outlined" onClick={changeMode}>
            light_mode
          </span>
        </div>
      </nav>
    </>
  );
}
