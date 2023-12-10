function AddModal({ shows, appoListt, apDatas }) {
  const { show, setShow, name } = shows;
  const { appoList, setAppoList } = appoListt;

  let { patient, day } = appoList;

  function handleClick() {
    patient && day ? apDatas.push(appoList) : alert("Please fill all fields");
    patient && day && setShow(!show);
    setAppoList({
      id: apDatas.length + 1 || 1,
      patient: "",
      day: "",
      doctor: "",
    });
  }

  const handleClickInput = function (e) {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const handleChange = function (e) {
    setAppoList({
      ...appoList,
      [e.target.id]: e.target.value,
      doctor: name,
      id: apDatas.length + 1 || 1,
    });
  };

  return (
    <div className="appo_modal">
      <p>
        Reservation for &nbsp; <span> {name} </span>{" "}
      </p>
      <label className="text-start" htmlFor="patience">
        Patience
      </label>
      <input
        onChange={handleChange}
        className="form-control"
        type="text"
        id="patient"
        value={patient || ""}
        required
      />
      <label className="text-start" htmlFor="date-time">
        Date & Time
      </label>
      <input
        onChange={handleChange}
        className="form-control"
        type="datetime-local"
        onKeyDown={handleClickInput}
        id="day"
        required
        value={day || ""}
      />
      <div className="appo_btn">
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-primary w-25"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="btn btn-danger w-25"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddModal;
