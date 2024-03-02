import { createPortal } from "react-dom";
import { motion } from "framer-motion";

//Layout imports
import Wrapper from "./Wrapper";

//icons imports
import { FiX } from "react-icons/fi";

const PortalEl = document.getElementById("overlay");

const Overlay = ({ isOpen, children, closeModal }) => {
    const handleCloseModal = () => {
        closeModal((prevState) => !prevState);
    };

    return createPortal(
        <>
            <div className="fixed inset-0 z-20 flex h-full overflow-auto bg-[rgba(26,26,26,.75)] py-6 lg:justify-center">
                <Wrapper>
                    <div className="pb-10">
                        <div
                            onClick={() => handleCloseModal()}
                            className="mb-2 flex cursor-pointer justify-end"
                        >
                            <FiX color="white" size={28} />
                        </div>
                        {isOpen && children}
                    </div>
                </Wrapper>
            </div>
        </>,
        PortalEl,
    );
};

export default Overlay;
