import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecordsBySession } from "../api/api";

import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { Box } from "@mui/material";

export default function Records() {
  const [ref, setRef] = useState(null);
  const [records, setRecords] = useState([]);
  const { sessionId } = useParams();
  const isInit = useRef(false);

  useEffect(() => {
    fetchRecordsBySession(sessionId, { offset: 0, limit: 100000000 }).then((r) => {
      setRecords(r.data);
    });
  }, []);

  useEffect(() => {
    if (ref && records.length && !isInit.current) {
      new rrwebPlayer({
        target: ref,
        props: {
          events: records,
          width: ref.getBoundingClientRect().width
        }
      });
      isInit.current = true;
    }
  }, [ref, records]);

  return <Box ref={setRef} sx={{ display: "flex", flexGrow: 1 }}></Box>;
}
