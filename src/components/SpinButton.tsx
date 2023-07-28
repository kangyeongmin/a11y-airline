import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";

const SpinButton: React.FC = () => {
  const MIN_COUNT = 0;
  const MAX_COUNT = 3;
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count < MAX_COUNT) {
      setCount((prevCount) => prevCount + 1);
      setMessage(`성인 승객 추가 ${count + 1}`);
    }
  };

  const decrement = () => {
    if (count > MIN_COUNT) {
      setCount((prevCount) => prevCount - 1);
      setMessage(`성인 승객 감소 ${count - 1}`);
    }
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label>성인</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className="spinButton"
          aria-label="성인 탑승자 한명 줄이기"
        >
          -
        </button>
        <input
          type="text"
          role="spinbutton"
          readOnly
          className="spinButtonInput"
          value={count}
          aria-label="텍스트 숫자만 수정"
        />
        <button
          onClick={increment}
          className="spinButton"
          aria-label="성인 탑승자 한명 늘리기"
        >
          +
        </button>
        <div
          role="alert"
          className="hidden"
          aria-atomic={true}
          aria-live="assertive"
        >
          {message}
        </div>
      </div>
    </section>
  );
};

export default SpinButton;
