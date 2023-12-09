// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

const Appointment = ({ apDatam }) => {
  const { apDatas, handleClick } = apDatam;

  return (
    <div className="appo mt-4">
      {apDatas.length ? <h4>Appointment List</h4> : ""}

      <div className="appo_cards ">
        {apDatas.map((data) => {
          const { id, patient, day, doctor } = data;

          return (
            <div className="appo_card " key={id}>
              <div className="patdoc">
                <p> {patient} </p>
                <p> {doctor} </p>
              </div>
              <div className="days">
                <p> {day.toString().replace("T", "----")} </p>
              </div>

              <FontAwesomeIcon
                type="button"
                className="closeIcon"
                icon={faRectangleXmark}
                onClick={() => handleClick(id || "")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appointment;
