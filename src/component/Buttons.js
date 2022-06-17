
import React, { useEffect, useState } from "react";
import { Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../component/App.scss';

export default function Buttons() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState(false);

  const InputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;
    if (total) {
      setPreState("");
    }
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };
  useEffect(() => {
    setInput(curState);
  }, [curState]);
  useEffect(() => {
    setInput("0");
  }, []);
  const OperatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      Equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };
  const Equals = (e) => {
    if (e.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "*":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setOperator("");
    setInput("");
    setPreState((cal).includes(".") ? Number(cal).toFixed(10).replace(/([0-9]+(\.[1-9]+)?)(\.?0+$)/, "$1") : (cal));
    setCurState("");
  };
  const backspace = () => {
    if (curState) {setCurState(curState.slice(0, -1));}
    else if (operator) {setOperator(operator.slice(0,-1))}
    else if (preState) {setPreState(preState.slice(0, -1));}
  };
  const Percent = (e) => {
    if (curState) {
      preState = setCurState(String((parseFloat(curState) / 100)))
    }
     else {
      preState =
      setCurState(String((parseFloat(preState))) / 100 );
    }
    console.log("preState",preState);
    console.log("curState",curState);
  };
  const Reset = () => {
    setPreState("");
    setCurState("");
    setInput("");
    setOperator("")
  };
  let Common=`${preState}`+ `${operator}`+`${curState}`
  return (
    <>
      <div>
        <div className="button" id="dir"> {`${Common.substring(0, 14)}`}
        </div>
        <div className="button">
          <Button variant="outline-success" className="rounded-circle" onClick={Reset} active>AC</Button>{' '}
          <Button variant="outline-success" className="rounded-circle " onClick={Percent} active>%</Button>{' '}
          <Button variant="outline-success" className="rounded-circle" onClick={backspace} active>C</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} active>/</Button>{' '}
        </div>
        <div className="button">
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>7</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>8</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>9</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} active>*</Button>{' '}
        </div>
        <div className="button">
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>4</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>5</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>6</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} active>-</Button>{' '}
        </div>
        <div className="button">
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>1</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>2</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>3</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} active>+</Button>{' '}
        </div>
        <div className="button">
          <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} active>0</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle btn-2" onClick={InputNum} active>.</Button>{' '}
          <Button variant="outline-danger" className="btn-1" onClick={Equals} active>=</Button>{' '}
        </div>
      </div>
    </>
  );
}
