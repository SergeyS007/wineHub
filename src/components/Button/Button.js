import "./Button.scss";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  const classNames = ["filters__button"];
  if (selected) {
    classNames.push("isSelected");
  }
  return (
    <button className={classNames.join(" ")} type={type} {...otherProps}>
      {children}
    </button>
  );
};
