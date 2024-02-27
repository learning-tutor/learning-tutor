import { styled } from "@linaria/react";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  color?: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--color-primary);
  color: white;
  cursor: pointer;
`;

export const Button = ({
  children,
  color = "var(--color-primary)",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
