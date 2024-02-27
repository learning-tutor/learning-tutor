import { css } from "@linaria/core";
import { styled } from "@linaria/react";

type InputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  type?: "text" | "password" | "email" | "number";
  error?: boolean;
  positive?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  size?: "small" | "medium" | "large";
  errorMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.1rem;
  display: flex;
  color: var(--color-text);
`;

const ErrorMessage = styled.label`
  margin-bottom: 0.1rem;
  color: var(--color-error);
  display: flex;
  font-size: 0.7rem;
`;

const InputField = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

const errorStyle = css`
  border: 1px solid var(--color-error);
`;

const positiveStyle = css`
  border: 1px solid var(--color-success);
`;
export const Input = ({
  label = "",
  placeholder = "",
  value,
  type = "text",
  error = false,
  positive = false,
  disabled = false,
  readOnly = false,
  size = "medium",
  errorMessage,
  handleChange,
}: InputProps) => {
  const inputStyle = error ? errorStyle : positive ? positiveStyle : "";
  const inputSize =
    size === "small" ? "0.6rem" : size === "large" ? "1.2rem" : "0.8rem";

  return (
    <Container>
      <Label>{label}</Label>
      <InputField
        className={`${inputStyle} ${inputSize}`}
        style={{
          fontSize: inputSize,
        }}
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        onChange={handleChange}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};
