import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSessionsByUser } from "../api/api";

export default function Sessions() {
  const [sessions, setSessions] = useState([]);
  const n = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    fetchSessionsByUser(userId, { offset: 0, limit: 100000000 })
      .then((r) => {
        setSessions(r.data);
      })
      .catch((e) => {
        console.error(e);
        toast("Cannot fetch users");
      });
  }, []);

  return (
    <DataGrid
      columns={[
        {
          field: "id",
          headerName: "ID"
        },
        {
          field: "startDate",
          headerName: "Start Date"
        },
        {
          field: "endDate",
          headerName: "End Date"
        },

        {
          field: "createdAt",
          headerName: "Created At",
          valueGetter: (v) => dayjs(v.value).format("YYYY-MM-DD HH:mm:ss")
        }
      ]}
      rows={sessions}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      pageSizeOptions={[10, 20, 50, 100]}
      onRowClick={(r) => {
        n(`/users/${userId}/sessions/${r.row.id}/records`);
      }}
    />
  );
}
