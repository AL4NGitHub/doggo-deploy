import "./card.css";

export function Card({
  type,
  price,
  info_first,
  info_second,
  info_third,
  choice,
}) {
  return (
    <>
      <div className="card">
        <div className="stripe"></div>
        <span className="type">{type}</span>
        <span className="price">{price}</span>
        <div className="info-box">
          <div className="info">
            <span className={choice[0]}>monetization_on</span>
            <span>{info_first}</span>
          </div>
          <div className="info">
            <span className={choice[1]}>photo_camera</span>
            <span>{info_second}</span>
          </div>
          <div className="info">
            <span className={choice[2]}>contact_support</span>
            <span>{info_third}</span>
          </div>
        </div>

        <button className="buy">
          <span class="material-symbols-outlined buy-ic">sell</span>
          Buy now
        </button>
      </div>
    </>
  );
}
