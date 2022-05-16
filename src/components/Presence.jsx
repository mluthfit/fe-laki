import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/presence.module.css";
import { dataURLtoFile } from "../scripts/Image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  // width: 220,
  // height: 200,
  facingMode: "user",
};

const Presence = () => {
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState("");
  const [clock, setClock] = useState({});
  const [photoError, setPhotoError] = useState([]);
  const [formSuccess, setFormSuccess] = useState("");
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImage(imageSrc);
    setPhoto(dataURLtoFile(imageSrc, "photo.jpeg"));
  }, [webcamRef]);

  const fetchClock = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `${env.API_URL}/dashboard/clock-today`,
        options
      );

      console.log(data);
      setClock(data?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  const onClockIn = async (e) => {
    e.preventDefault();

    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const body = new FormData();
      body.append("photo", photo);

      const { data } = await axios.post(
        `${env.API_URL}/presences/clock-in`,
        body,
        options
      );

      setFormSuccess(data?.messages ?? "");
      fetchClock();
    } catch (error) {
      const { data } = error.response;
      if (data?.validations) {
        setPhotoError(data?.validations?.photo);
      }
    }
  };

  const onClockOut = async (e) => {
    e.preventDefault();

    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.post(
        `${env.API_URL}/presences/clock-out`,
        {},
        options
      );

      setFormSuccess(data?.messages ?? "");
      fetchClock();
      setIsFirstOpen(false);
    } catch (error) {
      const { data } = error.response;
      console.log(data);
    }
  };

  useEffect(() => {
    fetchClock();
  }, []);

  return (
    <div className={style.presence}>
      {formSuccess && (
        <div className={style.success}>
          <span>{formSuccess}</span>
        </div>
      )}
      <div className={style.webcam}>
        {!clock.clock_in && !image && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        )}

        {!clock.clock_in && !!image && <img src={image} alt="Screenshoot" />}
        {!!clock.clock_in && (
          <img
            src={`${env.STORAGE_URL}/${clock?.media?.storage_path}`}
            alt="Presence's captured"
          />
        )}
      </div>
      {photoError.length > 0 && (
        <div className={style.error}>
          {photoError.map((error, index) => (
            <span key={index}>{error}</span>
          ))}
        </div>
      )}
      <div className={style.action}>
        {!clock.clock_in &&
          (!image ? (
            <button onClick={capture}>Capture</button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                setImage("");
              }}
            >
              Retake
            </button>
          ))}

        {!!image && !clock.clock_in && (
          <button onClick={onClockIn}>Clock In</button>
        )}

        {!!clock.clock_in && !clock.clock_out && (
          <button onClick={onClockOut}>Clock Out</button>
        )}

        {isFirstOpen && !!clock.clock_out && !!clock.clock_in && (
          <div className={style.success}>
            <span>You have been clocked in and clocked out already</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Presence;
