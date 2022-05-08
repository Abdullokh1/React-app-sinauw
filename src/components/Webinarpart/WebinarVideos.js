import React from "react";
import './WebinarVideos.css'

  export default function WebinarVideos(){
    return (
      <>
       <div>
          <ul className="d-flex justify-content-center webinar-list p-0 m-0">

            <li className="webinar-item">
              <img src="WebinarImgs/imac.png" alt="imac" width="351" height="270"></img>
            </li>

            <li className="webinar-item">
              <iframe className="iframe-video" width="622" height="424" src="https://www.youtube.com/embed/zzx0kZM38A4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </li>

            <li className="webinar-item"><img src="WebinarImgs/imac-pro.png" alt="imac-pro" width="358" height="270"></img></li>

          </ul>
        </div>
      </>
    )
  }