import React from "react";
export default function Table() {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let day = d.getDay();
  // let days = ["Chủ Nhật", "Hai", "Ba", "Tư", "Năm", "Bảy"];
  let firstSaturday = date + (7 - (day + 1));
  let secondSaturday = firstSaturday + 7;
  function formatDay(date, month, year) {
    return (
      checkDay(date, month, year).year +
      "-" +
      checkDay(date, month, year).month +
      "-" +
      checkDay(date, month, year).date
    );
  }
  function newDay(date, month, year, hour) {
    let d = new Date(
      parseInt(checkDay(date, month, year).year),
      parseInt(checkDay(date, month, year).month),
      parseInt(checkDay(date, month, year).date),
      parseInt(hour),
      parseInt(30)
    );
    return d.getTime();
  }
  function checkDay(date, month, year) {
    let is31 = [1, 3, 5, 7, 8, 10, 12];
    let is30 = [4, 6, 9, 11];
    let isleap;
    if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) isleap = true;
    else isleap = false;
    if (date > 31 && month in is31) {
      date = date - 31;
      month++;
    } else if (date > 30 && month in is30) {
      month++;
      date = date - 30;
    } else if (date > 29 && isleap) {
      month++;
      date = date - 29;
    } else if (date > 28) {
      month++;
      date = date - 28;
    }
    if (month > 12) {
      year++;
    }
    return { date, month, year };
  }
  console.log(d);
  return (
    <div>
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">Ngày</th>
            <th scope="col">Thời gian bắt đầu</th>
            <th scope="col">Thời gian kết thúc</th>
          </tr>
        </thead>
        <tbody>
          <tr id="firstSaturday">
            <th scope="row">
              {formatDay(firstSaturday, month, year)} (Thứ Bảy)
            </th>
            <td>
              {formatDay(firstSaturday, month, year)} 19:30:00 UTC + 7 (
              {newDay(firstSaturday, month, year, 19)})
            </td>
            <td>
              {formatDay(firstSaturday, month, year)} 22:30:00 UTC + 7 (
              {newDay(firstSaturday, month, year, 22)})
            </td>
          </tr>
          <tr id="secondSaturday">
            <th scope="row">
              {formatDay(secondSaturday, month, year)} (Thứ Bảy)
            </th>
            <td>
              {formatDay(secondSaturday, month, year)} 19:30:00 UTC + 7 (
              {newDay(secondSaturday, month, year, 19)})
            </td>
            <td>
              {formatDay(secondSaturday, month, year)} 22:30:00 UTC + 7 (
              {newDay(secondSaturday, month, year, 22)})
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
