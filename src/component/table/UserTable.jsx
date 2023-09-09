import React, { useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./userTable.scss";
import Loading from '../loading/Loading'

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const newList = [];
  const fetchUserApi = async () => {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const responseJson = await userResponse.json();
    return responseJson;
  };
  const fetchAlboumApi = async () => {
    const alboumResponse = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const responseJson = await alboumResponse.json();
    return responseJson;
  };
  const fetchPhotoApi = async () => {
    const photoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const responseJson = photoResponse.json();
    return responseJson;
  };

  useEffect(() => {
    fetchUserApi().then((response) => {
      response.map((user) => {
        fetchAlboumApi().then((response) => {
          const alboums = response
            .filter((alboum) => alboum.userId == user.id)
            .slice(0, 1);
          alboums.map((alboum) => {
            fetchPhotoApi().then((response) => {
              const photos = response
                .filter((photo) => photo.albumId == alboum.id)
                .slice(0, 1);
              photos.map((photo) => {
                newList.push({
                  id: user.id,
                  name: user.name,
                  username: user.username,
                  email: user.email,
                  city: user.address.city,
                  zipcode: user.address.zipcode,
                  imageUrl: photo.url,
                  imageTitle: photo.title,
                })
                if (newList.length == 10) {

                  setUsers(newList);
                  setLoaded(true)
                }
              });
            });
          });
        });
      });
    });
  }, []);
  return (
    <>
      {
        !loaded ? <Loading /> :
          <TableContainer component={Paper} className="tableContainer">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right" className="tableHead">
                    نام
                  </TableCell>
                  <TableCell align="right" className="tableHead">
                    تصویر
                  </TableCell>
                  <TableCell align="right" className="tableHead">
                    نام کاربری
                  </TableCell>
                  <TableCell align="right" className="tableHead">
                    ایمیل
                  </TableCell>
                  <TableCell align="right" className="tableHead">
                    آدرس پستی
                  </TableCell>
                  <TableCell align="right" className="tableHead">
                    کد پستی
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell
                      align="right"
                      className="tableCell"
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>
                      <div className="cellWrapper">
                        <img src={row.imageUrl} alt={row.imageTitle} />
                      </div>
                    </TableCell>
                    <TableCell align="right" className="tableCell">
                      {row.username}
                    </TableCell>
                    <TableCell align="right" className="tableCell">
                      {row.email}
                    </TableCell>
                    <TableCell align="right" className="tableCell">
                      {row.city}
                    </TableCell>
                    <TableCell align="right" className="tableCell">
                      {row.zipcode}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

      }
    </>
  );
};

export default UserTable;
