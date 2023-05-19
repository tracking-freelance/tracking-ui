import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchUsers } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const n = useNavigate();

  useEffect(() => {
    fetchUsers({ offset: 0, limit: 100000000 })
      .then((r) => {
        setUsers(r.data);
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
          field: "createdAt",
          headerName: "Created At",
          width: 300,
          valueGetter: (v) => dayjs(v.value).format("YYYY-MM-DD HH:mm:ss")
        }
      ]}
      rows={users}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      pageSizeOptions={[10, 20, 50, 100]}
      onRowClick={(r) => {
        n(`/users/${r.row.id}/sessions`);
      }}
    />
  );
}
