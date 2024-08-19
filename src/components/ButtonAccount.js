import "./ButtonAccount.scss";

export const ButtonAccount = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  const classNames = ["account__button"];
  if (selected) {
    classNames.push("isSelected");
  }
  return (
    <button className={classNames.join(" ")} type={type} {...otherProps}>
      {children}
    </button>
  );
};
