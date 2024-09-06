import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { btFormActions } from "../store/btForm/slice";

export const Form = () => {
  const { valueEdit } = useSelector((state) => state.btFormReducer);

  const value = valueEdit
    ? valueEdit
    : { maSV: "", name: "", sdt: "", email: "" };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    values: value,
  });

  const dispath = useDispatch();

  return (
    <div>
      <form
        onSubmit={handleSubmit((value) => {
          if (valueEdit) {
            dispath(btFormActions.updateValue(value));
            return;
          }
          dispath(btFormActions.setValueList(value));
          reset();
        })}
      >
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="font-medium text-[20px]">Mã SV</p>
            <input
              type="text"
              className="block w-full rounded-md border-2 py-1.5 px-3 text-black   placeholder:text-black placeholder:font-semibold "
              placeholder="Nhập họ tên"
              {...register("maSV", {
                required: "Vui lòng nhập tên",
                maxLength: {
                  value: 6,
                  message: "ID chỉ 6 kí tự",
                },
              })}
            />
            {errors?.maSV && (
              <p className="text-red-600">{errors?.maSV?.message}</p>
            )}
          </div>
          <div>
            <p className="font-medium text-[20px]">Họ và tên</p>
            <input
              type="text"
              className="block w-full rounded-md border-2 py-1.5 px-3 text-black   placeholder:text-black placeholder:font-semibold  "
              placeholder="Nhập họ tên"
              {...register("name", {
                required: "Vui lòng nhập tên",
                pattern: {
                  value: /^[^\d]+$/,
                  message: "Không nhập số",
                },
              })}
            />
            {errors?.name && (
              <p className="text-red-600">{errors?.name?.message}</p>
            )}
          </div>
          <div>
            <p className="font-medium text-[20px]">Số điện thoại</p>
            <input
              type="text"
              className="block w-full rounded-md border-2 py-1.5 px-3 text-black   placeholder:text-black placeholder:font-semibold "
              placeholder="Nhập họ tên"
              {...register("sdt", {
                required: "Vui lòng nhập tên",
              })}
            />
            {errors?.sdt && (
              <p className="text-red-600">{errors?.sdt?.message}</p>
            )}
          </div>
          <div>
            <p className="font-medium text-[20px]">Email</p>
            <input
              type="text"
              className="block w-full rounded-md border-2 py-1.5 px-3 text-black   placeholder:text-black placeholder:font-semibold "
              placeholder="Nhập họ tên"
              {...register("email", {
                required: "Vui lòng nhập tên",
                pattern: {
                  value:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: "Nhập đúng định dạng Email",
                },
              })}
            />
            {errors?.email && (
              <p className="text-red-600">{errors?.email?.message}</p>
            )}
          </div>
        </div>
        <div className="mt-3">
          {!valueEdit ? (
            <button
              type="submit"
              className="bg-green-600 py-2 px-5 rounded-lg text-[20px] font-medium"
            >
              Create
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 py-2 px-5 rounded-lg text-[20px] font-medium"
            >
              Update
            </button>
          )}
        </div>
        <div>
          <input
            type="text"
            className="block w-full rounded-md border-2 py-1.5 px-3 text-black   placeholder:text-black placeholder:font-semibold mt-5"
            placeholder="Nhập tên cần tìm"
            onChange={(e)=>{
              let value = e.target.value
              dispath(btFormActions.findValue(value))
            }}
          />
        </div>
      </form>
    </div>
  );
};
