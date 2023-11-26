import "./Hero.css";

export function Hero() {
  return (
    <>
      <div className="box">
        <header>
          <h2>Best services for best companies</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus atque beatae, expedita vero architecto excepturi
            deleniti omnis nesciunt ipsam placeat itaque doloremque fugit, unde
            libero, repellat facere natus perferendis ad?
          </p>
        </header>
        <div className="cta-box">
          <h3>Call To Action header</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sint
            reprehenderit iste tenetur ipsa doloribus reiciendis voluptatum
            autem suscipit repellat, itaque, amet.
          </p>
          <button className="btn">
            <span class="material-symbols-outlined call-ic">call</span>Contact
            us
          </button>
        </div>
      </div>
      <div className="imgs">
        <div className="floor-one">
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
        </div>
        <div className="floor-second">
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
        </div>
      </div>
    </>
  );
}
