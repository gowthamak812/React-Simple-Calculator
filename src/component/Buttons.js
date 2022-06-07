
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../component/App.scss';


export default function Buttons() {
  let [result, setResult] = useState("");
  function MyFunction(event) {
    let btnValue = event.target.innerHTML;
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(btnValue)
    ) {
      setResult(result + btnValue);
    } else if (btnValue === "⌫" && result !== "") {
      let tempResult = result.toString().slice(0, -1);
      setResult(tempResult);
    } else if (
      ["/", "*", "+", "-", "%", "**"].includes(btnValue) &&
      result !== ""
    ) {
      setResult(result + btnValue);
    } else if (btnValue === "=") {
      let tempres = eval(result);
      setResult(tempres);
    } else if (btnValue === "AC") {
      setResult("");
    }
  }

  return (
    <>
      <div>
        <input id='inp' type={Text} value={result} />
      </div>
      <div>
        <Button variant="outline-success" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>AC</Button>{' '}
        <Button variant="outline-success" className="rounded-circle crl " id="one" onClick={MyFunction} size="lg" active>%</Button>{' '}
        <Button variant="outline-success" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>⌫</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>/</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>7</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>8</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>9</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>*</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>4</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>5</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>6</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>-</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>1</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>2</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>3</Button>{' '}
        <Button variant="outline-secondary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>+</Button>{' '}
      </div>
      <div>
        <Button variant="outline-primary" className="btn-1 crl" id="one" onClick={MyFunction} size="lg" active>0</Button>{' '}
        <Button variant="outline-primary" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>.</Button>{' '}
        <Button variant="outline-danger" className="rounded-circle crl" id="one" onClick={MyFunction} size="lg" active>=</Button>{' '}
      </div>
    </>
  );
}
