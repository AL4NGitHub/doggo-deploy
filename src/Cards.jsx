import "./cards.css";
import { Card } from "./Card.jsx";

const choiceStandard = [
  "ic material-symbols-outlined",
  "ic material-symbols-outlined",
  "gray ic material-symbols-outlined",
];

const choiceBasic = [
  "ic material-symbols-outlined",
  "gray ic material-symbols-outlined",
  "gray ic material-symbols-outlined",
];

const choicePremiun = [
  "ic material-symbols-outlined",
  "ic material-symbols-outlined",
  "ic material-symbols-outlined",
];

const basic = [
  "Basic",
  "$5",
  "Lower price",
  "Best photos of dogs",
  "Ultra fast 24/7 support",
  choiceBasic,
];

const standard = [
  "Standard",
  "$10",
  "Lower price",
  "Best photos of dogs",
  "Ultra fast 24/7 support",
  choiceStandard,
];

const premiun = [
  "Premium",
  "$25",
  "Lower price",
  "Best photos of dogs",
  "Ultra fast 24/7 support",
  choicePremiun,
];

export function Cards() {
  return (
    <>
      <div className="cards-box">
        <Card
          type={basic[0]}
          price={basic[1]}
          info_first={basic[2]}
          info_second={basic[3]}
          info_third={basic[4]}
          choice={basic[5]}
        ></Card>
        <Card
          type={standard[0]}
          price={standard[1]}
          info_first={standard[2]}
          info_second={standard[3]}
          info_third={standard[4]}
          choice={standard[5]}
        ></Card>
        <Card
          type={premiun[0]}
          price={premiun[1]}
          info_first={premiun[2]}
          info_second={premiun[3]}
          info_third={premiun[4]}
          choice={premiun[5]}
        ></Card>
      </div>
    </>
  );
}
