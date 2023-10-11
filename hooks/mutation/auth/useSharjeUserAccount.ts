import { useMutation } from "react-query";
import {  sharjeAccountUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { successToast } from "@/helper/utils/error";

const useSharjeUserAccount = () => {
    return useMutation(async (data: any) => await sharjeAccountUser(data), {
        onSuccess: async function (data:any) {
            successToast("حساب شما با موفقیت شارژ شد")
           
        },
        onError: async function (error) {},
    });
};

export default useSharjeUserAccount;
