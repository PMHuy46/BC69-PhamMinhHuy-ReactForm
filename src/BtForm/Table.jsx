import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormActions } from "../store/btForm/slice";

export const Table = () => {
  const { valueList, valueFind } = useSelector((state) => state.btFormReducer);

  const value = valueFind ? valueFind : valueList;
  console.log(valueFind);
  const dispath = useDispatch();
  return (
    <div>
      <table className="table-fixed w-full text-left text-[24px] font-medium bg-black/90 text-white">
        <thead>
          <tr>
            <td>Mã SV</td>
            <td>Họ tên</td>
            <td>Số điện thoại</td>
            <td>Email</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {value.map((item) => {
            return (
              <tr key={item.maSV}>
                <td>{item.maSV}</td>
                <td>{item.name}</td>
                <td>{item.sdt}</td>
                <td>{item.email}</td>
                <td className="grid grid-cols-2 gap-2">
                  <button
                    className="bg-yellow-600 py-2 px-5 rounded-lg text-[20px] font-medium"
                    onClick={() => {
                      dispath(btFormActions.editValue(item));
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    className="bg-red-600 py-2 px-5 rounded-lg text-[20px] font-medium"
                    onClick={() => {
                      dispath(btFormActions.deleteValue(item.id));
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
