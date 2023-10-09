type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          margin: "10px 0",
        }}
        onChange={(e) => {
          // console.log(e.target?.value);
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
