"use client";
import AttributeAction from "@/components/admin/reference/Attribute";
import DeleteAttribute from "@/components/admin/reference/DeleteAttribute";
import BackHeader from "@/components/common/BackHeader";
import Table from "@/components/common/Table";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import useReferanceStore from "@/stores/reference-store";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
interface Props {
    attributes: { Total: number; Attributes: any[] };
    id:string
}
const Attribute = ({ attributes ,id}: Props) => {
    const { toggleAttribute } = useReferanceStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin/references?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/references?q=${e.target.value}`);
    };
    return (
        <div className="flex-1 w-full mb-20">
            <BackHeader name="منابع" url="/admin/references"/>
            <div className="flex items-center justify-between my-10">
                <div className="flex items-center  lg:w-1/2 bg-[#f7f7f7] border px-2 border-[#e1e1e1] rounded-lg py-2">
                    <input
                        placeholder="جستجو..."
                        className="bg-transparent font-artin-regular outline-none w-full"
                        onChange={onChange}
                    />
                    <BiSearch size={20} />
                </div>
                <button
                    onClick={() => toggleAttribute({open:"add",name:"add"})}
                    className="font-artin-bold text-xs bg-[#0096f5] text-white px-4 py-3 rounded-lg"
                >
                    جدید
                </button>
            </div>
            <Table header={[{ Name: "نام" }, { Name: "مقدار(value)" }, { Name: "عملیات" }]}>
                {attributes.Attributes?.map((item) => (
                    <StyledTableRow key={item._id}>
                        <StyledTableCell align="center">
                            <span className="font-artin-regular">{item.Name}</span>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <span className="font-artin-regular">{item.Value}</span>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <div className="">
                                <button
                                    onClick={() => toggleAttribute({ info: item, name: "delete", open: "delete" })}
                                    className="bg-red-500 mx-3 text-white px-3 py-1 rounded-lg !font-artin-regular"
                                >
                                    حذف
                                </button>
                                <button
                                    onClick={() => toggleAttribute({ name: "edit", info: item, open: "edit" })}
                                    className="bg-green-500 mx-3 text-white px-3 py-1 rounded-lg !font-artin-regular"
                                >
                                    ویرایش
                                </button>
                            </div>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </Table>
            <Pagination
                onChange={handleChange}
                color="primary"
                className="flex justify-center items-center mt-10"
                count={Math.ceil(attributes.Total / 10)}
                variant="outlined"
                shape="rounded"
            />
            <AttributeAction id={id}/>
            <DeleteAttribute />
        </div>
    );
};

export default Attribute;
