// import React, { useRef, useEffect, useCallback } from 'react'
// import { useSpring, animated } from 'react-spring'
// import {
//   Background,
//   ModalContent,
//   ModalImg,
//   ModalWrapper,
//   CloseModalButton
// } from './ModalElements'
// import { ModalProps } from '../../types'
// const ProjectModal: React.FC<ModalProps> = ({
//   showModal,
//   setShowModal,
//   data,
//   height,
//   noSource
// }) => {
//   let img, title, para, link

//   switch (data) {
//     case '1':
//     case '2':
//     case '3':
//   }

//   const modalRef = useRef()
//   const animation = useSpring({
//     config: {
//       duration: 250
//     },
//     opacity: showModal === 'true' ? 1 : 0,
//     transform: showModal === 'true' ? `translateY(0%)` : `translateY(-100%)`
//   })

//   const closeModal = e => {
//     if (modalRef.current === e.target) {
//       setShowModal(false)
//     }
//   }
// }

// export default ProjectModal
