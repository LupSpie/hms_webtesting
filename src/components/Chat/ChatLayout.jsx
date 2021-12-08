import React from "react";

const ChatLayout = ({ children }) => {
    return (
        <div className='flex flex-col w-80 bg-gray-100 rounded-lg chat-shadow relative'>
            <div className='font-bold text-lg my-1 py-1 border-b border-gray-100'>
                Mensagens
            </div>
            {children}
        </div>
    );
};

export default ChatLayout;
