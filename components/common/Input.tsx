import {useState} from "react";
interface Props {
    icon?: JSX.Element;
    placeholder?: string;
    classInput?: string;
    ltr?: boolean;
    label?: string;
    placeholderColor?: string;
    classInputTag?: string;
    name?: string;
    formik?: any;
    subTitle?:string;
    type?: string;
    maxLength?:number
}
const Input = ({ icon, placeholder,maxLength, classInput, ltr,subTitle, label, classInputTag, name, formik, type }: Props) => {
    
    return (
        <div>
            {label && <label className="font-artin-regular lg:text-[12px] block mb-1 pr-1 text-[#2F2F2F]">{label}</label>}

            <div
                className={`flex gap-1 w-full h-[52px] lg:h-[40px] overflow-hidden border bg-[#EFF2F6]  rounded-lg pl-2 items-center ${
                    formik && formik.touched[name!] && formik.errors[name!] ? "!border-[#E40000]" : "border-transparent"
                }  ${classInput}`}
            >
                {
                    subTitle &&
                <div className="bg-orange flex justify-center items-center h-full w-20">
                    <span className="text-xs font-artin-regular text-white">هزینه<br/> توافقی</span>
                </div>
                }
                {icon &&<span className="mr-2">{icon}</span>}
                <input
                maxLength={maxLength}
                    type={type}
                    value={formik.values[name!]}
                    onChange={(e) => formik.setFieldValue(name, e.target.value)}
                    name={name}
                    className={`bg-transparent outline-none pr-2 placeholder:text-right font-artin-regular  text-[14px] w-full text-inherit placeholder:text-[#d6d6d6] ${classInputTag}  ${
                        ltr ? "ltr" : "rtl"
                    } ${formik.touched[name!] && formik.errors[name!] && "bg-[#fbbe7b]"}`}
                    placeholder={placeholder}
                    autoComplete="off"
                />
            </div>
            <span className="block font-artin-light mt-[1px] text-[11px] pt-[2px] text-[#E40000] pr-1">
                {formik.touched[name!] && formik.errors[name!] ? formik.errors[name!] : null}
            </span>
        </div>
    );
};

export default Input;
