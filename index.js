const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="backgroundBox">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttonstyle">
      <Button className="btn1" name="Like" />
      <Button className="btn2" name="Comment" />
      <Button className="btn3" name="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
