import React from "react";

const ChatInput = ({ value, onChange, onKeyPress }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type='text'
            className='px-3 py-2 m-2 bg-gray-800 focus:bg-gray-450 rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none placeholder-gray-300 w-72'
            placeholder='Enviar mensagem'
            onKeyPress={(event) => {
                if (event.key === "Enter") {
                    if (!event.shiftKey) {
                        event.preventDefault();
                        if (value.trim() !== "") {
                            onKeyPress();
                        }
                    }
                }
            }}
        />
    );
};

export default ChatInput;
