import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <div className="row">
          <button type="button" className="silver">
            Ac
          </button>
          <button type="button" className="silver">
            +/-
          </button>
          <button type="button" className="silver">
            %
          </button>
          <button type="button" className="orange silver">
            %
          </button>
        </div>
        <div className="row">
          <button type="button" className="silver">
            7
          </button>
          <button type="button" className="silver">
            8
          </button>
          <button type="button" className="silver">
            9
          </button>
          <button type="button" className="orange silver">
            X
          </button>
        </div>
        <div className="row">
          <button type="button" className="silver">
            4
          </button>
          <button type="button" className="silver">
            5
          </button>
          <button type="button" className="silver">
            6
          </button>
          <button type="button" className="orange silver">
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="silver">
            1
          </button>
          <button type="button" className="silver">
            2
          </button>
          <button type="button" className="silver">
            3
          </button>
          <button type="button" className="orange silver">
            +
          </button>
        </div>
        <div className="row">
          <button type="button" className="long silver">
            0
          </button>
          <button type="button" className="silver">
            .
          </button>
          <button type="button" className="orange silver">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
