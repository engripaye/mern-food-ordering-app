import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "Address Line is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;

}

const UserProfileForm = ({ onSave, isLoading}: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema)
    });

}

export default UserProfileForm