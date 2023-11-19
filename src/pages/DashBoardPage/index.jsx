import Header from 'layout/header';
import './style.scss';

export default function DashBoardPage() {
  return (
    <div>
      <Header>
        <div>This is DashBoard Page</div>
      </Header>
      <img
        className="fullscreen-image"
        src=".\dashBoard.png"
        alt="Example"
      />
    </div>
  );
}
