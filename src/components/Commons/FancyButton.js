import { forwardRef } from "react";

const FancyButton = forwardRef(({ href, text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick} className="FancyButton">
    {text}
  </a>
));

export default FancyButton;
