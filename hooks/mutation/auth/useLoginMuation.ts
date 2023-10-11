import { useMutation } from "react-query";
import { loginUser } from "@/services/auth";
import { LoginUser } from "@/types/Auth";
import { useRouter } from "next/navigation";

const useLoginMuation = () => {
    const router = useRouter();
    return useMutation(async (data: LoginUser) => await loginUser(data), {
        onSuccess: async function (data:any,context) {
            router.push(`/auth/verify?phone=${context.phone}&code=${data.num}`);
        },
        onError: async function (error) {},
    });
};

export default useLoginMuation;
