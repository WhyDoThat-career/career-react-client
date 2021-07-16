import React from "react";
import styled from "styled-components";

export interface modalProps {
  open: boolean;
  close: () => void;
}

export function LoginModal({ open, close }: modalProps) {
  return (
    <Cover>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            {/* <button className="close" onClick={close}>
            close
          </button> */}
            <div>hi</div>
          </section>
        ) : null}
      </div>
    </Cover>
  );
}

const Cover = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal > section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
