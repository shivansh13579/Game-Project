"use client";

import { X } from "lucide-react";

function SharePopup({
  copyText,
  handleCopy,
  showModal,
  setShowModal,
  shareLink,
}) {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-bold mb-4">Share</h2>
            <div className="flex justify-around mb-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
              </a>
              <a
                href={`mailto:?subject=Check this quiz&body=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                  alt="Email"
                  className="w-8 h-8"
                />
              </a>

              <a
                href={`https://t.me/share/url?url=${shareLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                  alt="Telegram"
                  className="w-8 h-8"
                />
              </a>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-lg">
              <input
                type="text"
                value={shareLink}
                readOnly
                className="flex-1 bg-transparent outline-none"
              />
              <button
                onClick={handleCopy}
                className="bg-red-200 text-black px-3 py-1 rounded-lg font-bold"
              >
                {copyText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SharePopup;
