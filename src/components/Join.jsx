import React, { useState } from "react";
import Input from "./Join/Input";
import JoinButton from "./Join/JoinButton";
import Avatar from "boring-avatars";
import Select from "./Join/Select";
import getToken from "../utils/getToken";
import { useHMSActions } from "@100mslive/hms-video-react";
import Modal from "./Modal/Modal";

const Join = () => {
    const hmsActions = useHMSActions();

    const [modalOpen, setModalOpen] = useState(false);

    const [role, setRole] = useState("speaker");
    const [username, setUsername] = useState("");

    const joinRoom = () => {
        getToken(role)
            .then((token) => {
                hmsActions.join({
                    userName: username || "Anonymous",
                    authToken: token,
                    settings: {
                        isAudioMuted: true,
                    },
                });
            })
            .catch((error) => {
                console.log("Token API Error", error);
            });
    };
    return (
        // Container
        <div className='flex flex-col pt-4'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <Avatar size={120} name={username} variant='beam' />
                <Input state={{ username, setUsername }} />
                <Select state={{ role, setRole }} />
                <JoinButton onClick={joinRoom} />
            </div>
            <div className='flex h-20 bottom-0 space-x-4 left-0 w-full items-center justify-center'>
                <button
                    className='openModalBtn'
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Mindspaces © 2021
                </button>
            </div>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
};

export default Join;
