import { fallbackMessage } from "../../utilities/sharedComponents";

export const MainPageError = () => {
  return (
    <div className="errorpage-container">
      <div className="errorpage-elements">
        <img className="errorpage-image" src="src/assets/error-plane.jpg" alt="Crashed plane" />
        {fallbackMessage}
        <a href={window.location.href}>Retry</a>
      </div>
    </div>
  );
};
