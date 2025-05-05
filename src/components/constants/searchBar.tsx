import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search } from "../../assets/svg";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full z-40"
      style={{ overflow: "hidden" }}
    >
      <div
        className="absolute top-0 left-0 h-full w-full z-40"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(1px)",
        }}
        onClick={handleBackdropClick}
      />

      <div
        className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg pointer-events-auto"
        style={{
          width: "100%",
        }}
        tabIndex={-1}
        ref={modalRef}
      >
        <div className="container mx-auto px-7 py-12">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="w-full bg-[#111111] rounded-lg text-white text-md py-3 items-center px-5 outline-none"
              autoFocus
            />
            <button onClick={onClose} className="absolute right-5 text-white">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SearchModal;
