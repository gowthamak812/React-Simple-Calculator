
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../component/App.scss';


export default function Buttons() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
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
    setInput("");
    setPreState(cal);
    setCurState("");
  };
  const MinusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const Percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };
  const Reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };


  return (
    <>
      <div>
        {input !== "" || input === "0" ? (
          <input id="inp" value={input} />) : (<input id='inp' type={Text} value={preState} />)}
      </div>
      <div>
        <Button variant="outline-success" className="rounded-circle" onClick={Reset} size="lg" active>AC</Button>{' '}
        <Button variant="outline-success" className="rounded-circle " onClick={Percent} size="lg" active>%</Button>{' '}
        <Button variant="outline-success" className="rounded-circle" onClick={MinusPlus} size="lg" active>+/-</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} size="lg" active>/</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>7</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>8</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>9</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} size="lg" active>*</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>4</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>5</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>6</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} size="lg" active>-</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>1</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>2</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle" onClick={InputNum} size="lg" active>3</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle" onClick={OperatorType} size="lg" active>+</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="btn-1" onClick={InputNum} size="lg" active>0</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle btn-2" onClick={InputNum} size="lg" active>.</Button>{' '}
        <Button variant="outline-danger" className="rounded-circle" onClick={Equals} size="lg" active>=</Button>{' '}
      </div>
    </>
  );
}
