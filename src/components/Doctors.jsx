import { useState } from "react";
import { doctorData as docDatas } from "../helpers/data";
import { appointmentData as apDatass } from "../helpers/data";
import AddModal from "./AddModal";
import Appointment from "./Appointment";
const Doctors = () => {
  let [apDatas, setApDatas] = useState(apDatass);

  function handleClick(id) {
    id ? (apDatas = apDatas.filter((data) => data.id !== id)) : (apDatas = []);
    setApDatas(apDatas);
    console.log(id);
    console.log(apDatas);
  }

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [appoList, setAppoList] = useState({
    id: apDatas.length + 1 || 1,
    patient: "",
    day: "",
    doctor: "",
  });

  return (
    <>
      <div className="doctors mt-4 container">
        <div>
          <h5 className="doctors_h5 mb-3">Our Doctors</h5>
        </div>
        <div className="doctors_cards row">
          {docDatas.map((data) => {
            const { id, name, dep, img } = data;
            return (
              <div
                className=" col-lg-3 col-md-4 col-sm-6"
                key={id}
                type="button"
                onClick={() => {
                  setShow(!show);
                  setName(name);
                }}
              >
                <div>
                  <img src={img} alt={id} />
                </div>
                <h5> {name} </h5>
                <h6> {dep} </h6>
              </div>
            );
          })}
          {show && (
            <AddModal
              shows={{ show, setShow, name }}
              appoListt={{ appoList, setAppoList }}
              apDatas={apDatas}
            />
          )}
        </div>
      </div>
      <Appointment apDatam={{ apDatas, handleClick }} />
    </>
  );
};

export default Doctors;
