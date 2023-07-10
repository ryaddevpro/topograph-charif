"use client";
import Image from "next/image";

const Modal = ({ modalId, title, image, text, list }) => {
  return (
    <dialog id={modalId} className="modal border border-black w-full">
      <form method="dialog" className="modal-box max-w-full ">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div>
          <h3 className="font-bold text-3xl text-center"> {title}</h3>
          <div className="flex flex-wrap sm:m-5 justify-center">
            <div className="my-auto py-5">
              {<Image src={image} width={200} height={200} alt="" />}
            </div>
            <div
              className="sm:mx-0 md:mx-10 lg:mx-10 sm:w-full md:w-6/12 lg:w-8/12"
              dangerouslySetInnerHTML={{ __html: text }}
            >
              {/* <div className="my-2">
                <b>Nos domaines d’activités portent sur :</b>
              </div>
              <div className="mx-5">
                <ul className="list-disc	break-words w-">
                  {list &&
                    list.map((x, index) => {
                      return <li key={index}>{x}</li>;
                    })}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
