import { useState } from "react";
import Image from "next/image";
import info from "../../public/information.svg"
import {useRouter} from "next/router";

const Modal = ({alerta}) => {
  const [isopen, setIsopen] = useState(true);
  console.log(isopen);
  const router = useRouter()

  const handleClose = () =>{
    setIsopen(false);
    router.reload("/agendaCorpSol")
  }

  return ( <>
  {isopen && (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col bg-white p-5 rounded-lg justify-center items-center gap-5">
        <Image src={info} alt="info" title="icono de información" className="w-24 text-gray-200"/>
        <h3 className="text-center text-ferra text-xl font-semibold">{alerta}</h3>
        <button className="border px-4 py-2 border-ferra rounded-md" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  )}
  </> );
}
 
export default Modal;

// import { useState } from "react";
// import Image from "next/image";
// import info from "../../public/information.svg";

// const Modal = ({ alerta }) => {
//   const [isopen, setIsopen] = useState(false);
//   return (
//     <>
//       {isopen && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
//           <div className="bg-white p-5 rounded-lg flex flex-col justify-center items-center gap-5">
//             <Image
//               className="w-24"
//               src={info}
//               alt="info"
//               title="icono de informacion"
//             />
//             <h3 className="text-center text-sm font-semibold text-ferra">
//               {alerta}
//             </h3>
//             <button onClick={() => (setIsopen = false)}>Cerrar</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;