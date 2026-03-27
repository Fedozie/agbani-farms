import { useNavigate } from "react-router-dom";
import { TransitionLayout } from "./transitionLayout";

interface TransitionLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const TransitionLink = ({ to, children, className }: TransitionLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // stop normal navigation
    TransitionLayout(() => navigate(to)); // run overlay transition then navigate
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};